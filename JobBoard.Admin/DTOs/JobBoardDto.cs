namespace JobBoard.Admin.DTOs
{
    public class JobBoardDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public bool IsOnlineApply { get; set; }

        public bool IsEmailApply { get; set; }

        public int EstreamJbsId { get; set; }
    }
}
