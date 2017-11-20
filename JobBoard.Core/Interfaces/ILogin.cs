namespace JobBoard.Core.Interfaces
{
    public interface ILogin
    {
        string Email { get; set; }
        string Password { get; set; }
        bool RememberMe { get; set; }
        bool LockoutEnabled { get; set; }
    }
}
