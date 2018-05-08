using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace RestauranteWebApi.Models
{
    [Table("Restaurante")]
    public class Restaurante
    {
        // Características do restaurante

        [Key()]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int RestauranteId { get; set; }

        [StringLength(100)]
        [Required(ErrorMessage = "O nome do restaurante é obrigatório")]
        public string RestauranteNome { get; set; }
    }
}