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
    public class RestaurantesController : ApiController
    {
        private readonly RestauranteDataContext _db = new RestauranteDataContext();

        [HttpGet]
        [Route("restaurantes")]
        public HttpResponseMessage Get(string name = null)
        {
            List<Restaurante> listaRestaurante = new List<Restaurante>();

            if (string.IsNullOrEmpty(name))
            {
                listaRestaurante = _db.Restaurantes.OrderBy(x => x.RestauranteNome).ToList();

                return Request.CreateResponse(HttpStatusCode.OK, listaRestaurante);
            }
            else
            {
                listaRestaurante = _db.Restaurantes.Where(x => x.RestauranteNome.Contains(name)).OrderBy(x => x.RestauranteNome).ToList();

                return Request.CreateResponse(HttpStatusCode.OK, listaRestaurante);
            }
        }

        [HttpGet]
        [Route("restaurantes/{id:int}")]
        public HttpResponseMessage Get(int id)
        {
            if (id <= 0)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }

            Restaurante restaurante = _db.Restaurantes.Find(id);

            return Request.CreateResponse(HttpStatusCode.OK, restaurante);
        }

        [HttpPut]
        [Route("putRestaurante")]
        public HttpResponseMessage Put(Restaurante restaurante)
        {
            if (restaurante == null)
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            _db.Entry(restaurante).State = EntityState.Modified;
            _db.SaveChanges();
            return Request.CreateResponse(HttpStatusCode.OK, restaurante);
        }

        [HttpPost]
        [Route("postRestaurante")]
        public HttpResponseMessage Post(Restaurante restaurante)
        {
            if (restaurante == null)
                return Request.CreateResponse(HttpStatusCode.BadRequest);

            List<Restaurante> lsRestaurante = _db.Restaurantes.ToList();
            foreach (var iRestaurante in lsRestaurante)
            {
                if (iRestaurante.RestauranteNome == restaurante.RestauranteNome)
                    return Request.CreateResponse(HttpStatusCode.Continue);
            }

            _db.Restaurantes.Add(restaurante);
            _db.SaveChanges();
            return Request.CreateResponse(HttpStatusCode.Created, restaurante);
        }


        [HttpDelete]
        [Route("deleteRestaurante/{id:int}")]
        public HttpResponseMessage Delete(int id)
        {
            if (id <= 0)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }

            Restaurante restaurante = _db.Restaurantes.Find(id);

            _db.Restaurantes.Remove(restaurante);
            _db.SaveChanges();
            return Request.CreateResponse(HttpStatusCode.OK, restaurante);
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
