namespace JobBoard.Admin.DTOs
{
    public class JobBoardCreateDto
    {
        public string Name { get; set; }

        public bool IsOnlineApply { get; set; }

        public bool IsEmailApply { get; set; }
    }
}
