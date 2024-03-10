using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    { //sa ovim required odradimo osnovu validaciju da ne moze da bude prazan string. da ne nasledjuje baseapicontroller koji ima [apicontroller] prosla bi prazan string
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
    }
}