using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace RestauranteWebApi.Models
{
    [Table("Prato")]
    public class Prato
    {
        // Características do prato

        [Key()]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [StringLength(100)]
        [Required(ErrorMessage = "O nome do prato é obrigatório")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "O valor do prato é obrigatório")]
        public decimal Preco { get; set; }

        public string Imagem { get; set; }

        // Propriedade de navegação

        [Required(ErrorMessage = "O restaurante é obrigatório")]
        public int RestauranteId { get; set; }

        [ForeignKey("RestauranteId")]
        public virtual Restaurante Restaurante { get; set; }
    }
}