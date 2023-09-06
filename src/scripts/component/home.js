import TheRestaurantSource from '../data/therestaurant-source';
import { createRestaurantItemTemplate } from '../views/templates/template-creator';

const Home = {
  async render() {
    return `
      <section class="content-title">
        <h2>Mukbang Nusantara</h2>
      </section>
      <div class="content__list">
        <div class="content-list" id="data"></div>
      </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await TheRestaurantSource.home();
    const restaurantsContainer = document.querySelector('#data');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
