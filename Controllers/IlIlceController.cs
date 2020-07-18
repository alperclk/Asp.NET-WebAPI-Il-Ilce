using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AdresAPI.Controllers
{
    public class IlIlceController : ApiController
    {
        AdresEntities ilIlce = new AdresEntities();

        [HttpGet]
        public IEnumerable <Sehir> GetIl()
        {
            return ilIlce.Sehir.OrderBy(c=>c.sehir_key);
        }

        [HttpGet]
        public IEnumerable <Ilce> GetIlce(int id)
        {
            return ilIlce.Ilce.Where(x => x.ilce_sehirkey == id).ToList();
        }
    }
}
