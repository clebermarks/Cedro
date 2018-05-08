using RestauranteWebApi.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace RestauranteWebApi.DataContexts
{
    public class RestauranteDataContext : DbContext
    {
        //Construtor para inicialização e conexão ao banco de dados
        public RestauranteDataContext() : base("RestaurantesCS") { }

        //Mapeamento das tabelas do banco de dados nas entidades POCO
        public DbSet<Prato> Pratos { get; set; }
        public DbSet<Restaurante> Restaurantes { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //Remoção da convenção de pluralização de nomes de tabelas em inglês
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            base.OnModelCreating(modelBuilder);
        }
    }
}