using API.Entities;

namespace API.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
        //svaka klasa koja implementira interfejs mora da implementira ovu metodu koja vraca string (nas token)
    }
}