import { Router } from 'express';
import { addCategory, getCategories, getCategory } from './controllers/CategoryController';
import { addToFavorite } from './controllers/FavoriteController';
import { addProduct, getProduct, getProducts } from './controllers/ProductController';
import { addSlider, getSliders } from './controllers/SliderController';

const apiRouter: Router = Router();

// Category
apiRouter.get('/categories', getCategories);
apiRouter.get('/categories/:id', getCategory);
apiRouter.post('/categories', addCategory);

// Product
apiRouter.get('/categories/:id/products', getProducts);
apiRouter.get('/products/:id', getProduct);
apiRouter.post('/products', addProduct);

// Slider
apiRouter.get('/sliders', getSliders);
apiRouter.post('/sliders', addSlider);

// Favorite
apiRouter.post('/favorite', addToFavorite);

export default apiRouter;
