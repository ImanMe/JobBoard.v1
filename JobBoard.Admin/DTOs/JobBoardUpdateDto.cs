namespace JobBoard.Admin.DTOs
{
    public class JobBoardUpdateDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public bool IsOnlineApply { get; set; }

        public bool IsEmailApply { get; set; }
    }
}
