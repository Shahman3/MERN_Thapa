import { useAuth } from "../store/auth";

function Services() {
  const { services } = useAuth();
  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading center">Services</h1>;
      </div>
      <div className="container grid grid-three-cols">
        {services.map((curElem, index) => {
          const { service, price, provider, description } = curElem;

          return (
            <div className="card" key={index}>
              <img
                src="/images/login.jpg"
                alt="our services info"
                width="500"
                height="400"
                className="card-img"
              />

              <div className="card-details">
                <div className=" grid-two-cols card-h">
                  <p>{provider}</p>
                  <p>{price}</p>
                </div>
                <h2>{service}</h2>
                <p className="card-detail-p">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div class="meal">
        <img src="img/meals/meal2.jpg" class="meal-img" alt="japanese Gyozas" />
        <div class="meal-content">
          <div class="meal-tags">
            <span class="tag tag-vegetarin">Vegetarian</span>
          </div>

          <p class="meal-title">Japanese Gyozar</p>
          <ul class="meal-attributes">
            <li class="meal-attribute">
              <ion-icon class="meal-icon" name="flame-outline"></ion-icon>
              <strong>650</strong>
              calories
            </li>
            <li class="meal-attribute">
              <ion-icon class="meal-icon" name="restaurant-outline"></ion-icon>
              NutriScore &reg; <strong>74</strong>
            </li>
            <li class="meal-attribute">
              <ion-icon class="meal-icon" name="star-outline"></ion-icon>
              <strong>4.9</strong>
              rating (537)
            </li>
          </ul>
        </div>
      </div> */}
    </section>
  );
}

export default Services;
