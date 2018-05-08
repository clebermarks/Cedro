using RestauranteWebApi.DataContexts;
using RestauranteWebApi.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RestauranteWebApi.Controllers
{
    [RoutePrefix("api/v1/public")]
    public class PratosController : ApiController
    {
        private readonly RestauranteDataContext _db = new RestauranteDataContext();

        [HttpGet]
        [Route("pratos")]
        public HttpResponseMessage Get(string name = null)
        {
            List<Prato> listaPrato = new List<Prato>();

            if (string.IsNullOrEmpty(name))
            {
                listaPrato = _db.Pratos.OrderBy(x => x.Restaurante.RestauranteNome).ToList();

                return Request.CreateResponse(HttpStatusCode.OK, listaPrato);
            }
            else
            {
                listaPrato = _db.Pratos.Where(x => x.Nome.Contains(name)).OrderBy(x => x.Restaurante.RestauranteNome).ToList();

                return Request.CreateResponse(HttpStatusCode.OK, listaPrato);
            }
        }

        [HttpGet]
        [Route("pratos/{id:int}")]
        public HttpResponseMessage ObterPorId(int id)
        {
            if (id <= 0)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }

            Prato prato = _db.Pratos.Find(id);

            return Request.CreateResponse(HttpStatusCode.OK, prato);
        }

        [HttpPut]
        [Route("putPrato")]
        public HttpResponseMessage Alterar(Prato prato)
        {
            if (prato == null)
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            _db.Entry(prato).State = EntityState.Modified;
            _db.SaveChanges();
            return Request.CreateResponse(HttpStatusCode.OK, prato);
        }

        [HttpPost]
        [Route("postPrato")]
        public HttpResponseMessage Incluir(Prato prato)
        {
            if (prato == null)
                return Request.CreateResponse(HttpStatusCode.BadRequest);


            List<Prato> lsPrato = _db.Pratos.ToList();
            foreach (var iPrato in lsPrato)
            {
                if (iPrato.Nome == prato.Nome)
                    return Request.CreateResponse(HttpStatusCode.Continue);
            }

            _db.Pratos.Add(prato);
            _db.SaveChanges();
            return Request.CreateResponse(HttpStatusCode.Created, prato);
        }


        [HttpDelete]
        [Route("deletePrato/{id:int}")]
        public HttpResponseMessage Excluir(int id)
        {
            if (id <= 0)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }

            Prato prato = _db.Pratos.Find(id);

            _db.Pratos.Remove(prato);
            _db.SaveChanges();
            return Request.CreateResponse(HttpStatusCode.OK, prato);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _db.Dispose();
            }

            base.Dispose(disposing);
        }
    }
}
