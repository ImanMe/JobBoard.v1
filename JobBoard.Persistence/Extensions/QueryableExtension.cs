using JobBoard.Core.Models;
using JobBoard.Persistence.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace JobBoard.Persistence.Extensions
{
    public static class QueryableExtension
    {
        public static IQueryable<Job> ApplyFiltering(this IQueryable<Job> query, JobQuery queryObj)
        {
            if (queryObj.Id.HasValue)
                query = query.Where(j => j.Id == queryObj.Id);

            if (queryObj.IsActive.HasValue)
                query = queryObj.IsActive == true
                    ? query.Where(j => j.ExpirationDate >= DateTime.Now)
                    : query.Where(j => j.ExpirationDate < DateTime.Now);

            if (!string.IsNullOrEmpty(queryObj.Title))
                query = query.Where(j => j.Title.Contains(queryObj.Title));

            if (queryObj.SchedulingPod.HasValue)
                query = query.Where(j => j.SchedulingPod == queryObj.SchedulingPod);

            if (queryObj.OfficeId.HasValue)
                query = query.Where(j => j.OfficeId == queryObj.OfficeId);

            if (!string.IsNullOrEmpty(queryObj.JobBoard))
                query = query.Where(j => j.JobBoard.JobBoardName.Contains(queryObj.JobBoard));

            if (!string.IsNullOrEmpty(queryObj.Division))
                query = query.Where(j => j.Division.Contains(queryObj.Division));

            if (!string.IsNullOrEmpty(queryObj.City))
                query = query.Where(j => j.City.Contains(queryObj.City));

            if (!string.IsNullOrEmpty(queryObj.State))
                query = query.Where(j => j.State.StateName.Contains(queryObj.State));

            if (!string.IsNullOrEmpty(queryObj.Country))
                query = query.Where(j => j.Country.CountryName.Contains(queryObj.Country));

            if (!string.IsNullOrEmpty(queryObj.Category))
                query = query.Where(j => j.Category.CategoryName.Contains(queryObj.Category));

            if (!string.IsNullOrEmpty(queryObj.CompanyName))
                query = query.Where(j => j.CompanyName.Contains(queryObj.CompanyName));

            if (!string.IsNullOrEmpty(queryObj.CreatedBy))
                query = query.Where(j => j.CreatedBy.Contains(queryObj.CreatedBy));

            if (queryObj.ListType == ListType.Stats)
                query = query
                    .Where(j => j.Stat == null || j.Stat.ApsCl == null)
                    .Where(j => j.ExpirationDate < DateTime.Now.AddDays(-30));

            return query;
        }

        public static IQueryable<Job> ApplyFilteringForActive(this IQueryable<Job> query, ReportQuery reportQuery)
        {
            if (reportQuery.Pod != 0)
                query = query.Where(j => j.SchedulingPod == reportQuery.Pod);

            if (reportQuery.JobBoardId != 0)
                query = query.Where(j => j.JobBoardId == reportQuery.JobBoardId);

            if (reportQuery.FromDate != null)
                query = query.Where(j => j.ExpirationDate == reportQuery.FromDate);

            if (reportQuery.JobBoardId != 0)
                query = query.Where(j => j.JobBoardId == reportQuery.JobBoardId);

            return query;
        }

        public static IQueryable<Job> ApplyFilteringForInActive(this IQueryable<Job> query, ReportQuery reportQuery)
        {
            query = query.Where(j => j.IsEverGreen == false);

            query = query.Where(j => j.ExpirationDate < DateTime.Now);

            if (reportQuery.Pod != 0)
                query = query.Where(j => j.SchedulingPod == reportQuery.Pod);

            if (reportQuery.JobBoardId != 0)
                query = query.Where(j => j.JobBoardId == reportQuery.JobBoardId);

            if (reportQuery.FromDate != null)
                query = query.Where(j => j.ExpirationDate >= reportQuery.FromDate);

            if (reportQuery.ToDate != null)
                query = query.Where(j => j.ExpirationDate <= reportQuery.ToDate);

            return query;
        }

        public static IQueryable<Job> ApplyFilteringForCreatedBy(this IQueryable<Job> query, ReportQuery reportQuery)
        {
            if (reportQuery.User != null)
                query = query.Where(j => j.CreatedBy == reportQuery.User);

            if (reportQuery.FromDate != null)
                query = query.Where(j => j.CreatedDate >= reportQuery.FromDate);

            if (reportQuery.ToDate != null)
                query = query.Where(j => j.CreatedDate <= reportQuery.ToDate);

            return query;
        }

        public static IQueryable<T> ApplyOrdering<T>(this IQueryable<T> query, JobQuery queryObj, Dictionary<string, Expression<Func<T, object>>> columnsMap)
        {
            if (string.IsNullOrWhiteSpace(queryObj.SortBy) || !columnsMap.ContainsKey(queryObj.SortBy))
                return query;

            return queryObj.IsSortAscending
                ? query.OrderBy(columnsMap[queryObj.SortBy])
                : query.OrderByDescending(columnsMap[queryObj.SortBy]);
        }

        public static IQueryable<T> ApplyPaging<T>(this IQueryable<T> query, JobQuery queryObj)
        {
            if (queryObj.Page <= 0) queryObj.Page = 1;

            if (queryObj.PageSize <= 0) queryObj.PageSize = 10;

            return query.Skip((queryObj.Page - 1) * queryObj.PageSize).Take(queryObj.PageSize);
        }

        public static IQueryable<Job> SortBasedOnListType(this IQueryable<Job> query, JobQuery queryObj)
        {
            if (queryObj.ListType == ListType.Listing)
                query = query.SortForListing();

            else if (queryObj.ListType == ListType.Conversion)
                query = query.SortForConversion();

            else if (queryObj.ListType == ListType.Duplicate)
                query = query.SortForDuplicate();

            else if (queryObj.ListType == ListType.Stats)
                query = query.SortForStatsPending();

            return query;
        }

        private static IQueryable<Job> SortForConversion(this IQueryable<Job> query)
        {
            query = query
                .OrderBy(j => j.SchedulingPod)
                .ThenBy(j => j.JobBoard.JobBoardName)
                .ThenBy(j => j.City)
                .ThenBy(j => j.Category.CategoryName)
                .ThenByDescending(j => j.ExpirationDate >= DateTime.Now)
                .ThenByDescending(j => j.Stat.Bob)
                .ThenByDescending(j => j.Stat.Intvs2)
                .ThenByDescending(j => j.Stat.Intvs)
                .ThenByDescending(j => j.Stat.ApsCl)
                .ThenByDescending(j => j.Id);

            return query;
        }

        private static IQueryable<Job> SortForListing(this IQueryable<Job> query)
        {
            query = query
                .OrderBy(j => j.SchedulingPod)
                .ThenBy(j => j.JobBoard.JobBoardName)
                .ThenBy(j => j.City)
                .ThenBy(j => j.Category.CategoryName)
                .ThenByDescending(j => j.ExpirationDate >= DateTime.Now)
                .ThenByDescending(j => j.Stat.ApsCl)
                .ThenByDescending(j => j.Stat.Bob)
                .ThenByDescending(j => j.Stat.Intvs2)
                .ThenByDescending(j => j.Stat.Intvs)
                .ThenByDescending(j => j.Id);

            return query;
        }

        private static IQueryable<Job> SortForDuplicate(this IQueryable<Job> query)
        {
            query = query
                .Where(j => j.CloneFrom != null)
                .GroupBy(j => new { j.CloneFrom, j.SchedulingPod, j.City, j.CompanyName })
                .Where(x => x.Count() > 1)
                .SelectMany(x => x.Select(r => r))
                .OrderBy(j => j.CloneFrom)
                .ThenBy(j => j.Id);

            return query;
        }

        private static IQueryable<Job> SortForStatsPending(this IQueryable<Job> query)
        {
            query = query
                .OrderByDescending(j => j.ExpirationDate)
                .ThenByDescending(j => j.ActivationDate)
                .ThenBy(j => j.JobBoard.JobBoardName)
                .ThenBy(j => j.SchedulingPod)
                .ThenBy(j => j.Title)
                .ThenBy(j => j.Id);

            return query;
        }

        public static IQueryable<Job> SortForActiveReports(this IQueryable<Job> query)
        {
            query = query
                 .OrderBy(j => j.SchedulingPod)
                 .ThenBy(j => j.JobBoard.JobBoardName)
                 .ThenBy(j => j.City)
                 .ThenBy(j => j.Category.CategoryName)
                 .ThenBy(j => j.ExpirationDate)
                 .ThenByDescending(j => j.Stat.ApsCl)
                 .ThenByDescending(j => j.Stat.Bob)
                 .ThenByDescending(j => j.Stat.Intvs2)
                 .ThenByDescending(j => j.Stat.Intvs);

            return query;
        }

        public static IQueryable<Job> SortForInActiveReports(this IQueryable<Job> query)
        {
            query = query
                .OrderBy(m => m.SchedulingPod)
                .ThenBy(m => m.JobBoard.JobBoardName)
                .ThenBy(m => m.City)
                .ThenBy(m => m.Category.CategoryName)
                .ThenBy(m => m.ExpirationDate)
                .ThenByDescending(j => j.Stat.ApsCl)
                .ThenByDescending(j => j.Stat.Bob)
                .ThenByDescending(j => j.Stat.Intvs2)
                .ThenByDescending(j => j.Stat.Intvs);

            return query;
        }

        public static IQueryable<Job> SortForCreatedByReports(this IQueryable<Job> query)
        {
            query = query
                .OrderBy(j => j.SchedulingPod)
                .ThenBy(j => j.JobBoard.JobBoardName)
                .ThenBy(j => j.City)
                .ThenBy(j => j.Category.CategoryName)
                .ThenByDescending(j => j.ExpirationDate >= DateTime.Now)
                .ThenByDescending(j => j.Stat.ApsCl)
                .ThenByDescending(j => j.Stat.Bob)
                .ThenByDescending(j => j.Stat.Intvs2)
                .ThenByDescending(j => j.Stat.Intvs)
                .ThenByDescending(j => j.Id);

            return query;
        }
    }
}
