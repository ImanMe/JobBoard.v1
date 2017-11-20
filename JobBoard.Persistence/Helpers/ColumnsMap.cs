using JobBoard.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace JobBoard.Persistence.Helpers
{
    public static class ColumnsMap
    {
        public static Dictionary<string, Expression<Func<Job, object>>> CreateColumnsMap()
        {
            return new Dictionary<string, Expression<Func<Job, object>>>
            {
                ["id"] = v => v.Id,
                ["title"] = v => v.Title,
                ["jobboard"] = v => v.JobBoard.JobBoardName,
                ["activationdate"] = v => v.ActivationDate,
                ["expirationdate"] = v => v.ExpirationDate,
                ["clonefrom"] = v => v.CloneFrom,
                ["evergreenid"] = v => v.EverGreenId,
                ["schedulingpod"] = v => v.SchedulingPod,
                ["officeid"] = v => v.OfficeId,
                ["category"] = v => v.Category.CategoryName,
                ["division"] = v => v.Division,
                ["state"] = v => v.State.StateName,
                ["country"] = v => v.Country.CountryCode,
                ["city"] = v => v.City,
                ["company"] = v => v.CompanyName,
                ["apscl"] = v => v.Stat.ApsCl,
                ["bob"] = v => v.Stat.Bob,
                ["intvs"] = v => v.Stat.Intvs,
                ["intvs2"] = v => v.Stat.Intvs2,
                ["createddate"] = v => v.CreatedDate,
                ["createdby"] = v => v.CreatedBy,
                ["emailto"] = v => v.EmailTo
            };
        }
    }
}
