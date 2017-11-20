namespace JobBoard.Core.Models
{
    public class JobBoard
    {
        public int Id { get; set; }

        public string JobBoardName { get; set; }

        public bool IsOnlineApply { get; set; }

        public bool IsEmailApply { get; set; }

        public int EstreamJbsId { get; set; }
    }
}
