namespace RestauranteWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Prato",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Nome = c.String(nullable: false, maxLength: 100),
                        Preco = c.Decimal(nullable: false, precision: 18, scale: 2),
                        Imagem = c.String(),
                        RestauranteId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Restaurante", t => t.RestauranteId, cascadeDelete: true)
                .Index(t => t.RestauranteId);
            
            CreateTable(
                "dbo.Restaurante",
                c => new
                    {
                        RestauranteId = c.Int(nullable: false, identity: true),
                        RestauranteNome = c.String(nullable: false, maxLength: 100),
                    })
                .PrimaryKey(t => t.RestauranteId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Prato", "RestauranteId", "dbo.Restaurante");
            DropIndex("dbo.Prato", new[] { "RestauranteId" });
            DropTable("dbo.Restaurante");
            DropTable("dbo.Prato");
        }
    }
}
