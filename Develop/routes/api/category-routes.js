const router = require('express').Router();
const { Category, Product, ProductTag } = require('../../models');

// The `/api/categories` endpoint
router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      include: [
        { model: Product }
      ]
    });

    res.status(200).json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error); //TENGO QUE BORRAR ESTE MUGREROOOO!!!!!
    res.status(500).json({ error: 'Error fetching categories' });
  }
});

  // find one category by its `id` value
router.get('/:id', async (req, res) => {
  // be sure to include its associated Products
  try {
    const categoryId = req.params.id;
    const category = await Category.findByPk(categoryId, {
      include: [
        { model: Product }
      ]
    });
    if (category) {
      res.status(200).json(category);
    } else {
      res.status(404).json({ error: 'Category not found' });
    }

  } catch (error) {
    console.error('Error fetching category:', error); //TENGO QUE BORRAR ESTE MUGREROOOO!!!!!
    res.status(500).json({ error: 'Error fetching category'});
  }
});

  // create a new category
router.post('/', async (req, res) => {
  try {
    const { category_name } = req.body;
    const newCategory = await Category.create({
      category_name
    });
    res.status(201).json(newCategory);

  } catch (error) {
    console.error('Error creating category:', error); //TENGO QUE BORRAR ESTE MUGREROOOO!!!!!
    res.status(500).json({ error: 'Error creating category' });
  }
});

  // update a category by its `id` value
router.put('/:id', async (req, res) => {
try {
  const categoryId = req.params.id;
  const { category_name } = req.body; // Takes updated category data from the req. body.
  const category = await Category.findByPk(categoryId); // Find category by its id.

  if (!category) {
    return res.status(404).json({ error: 'Category not found' });
  }
  await category.update({
    category_name
  });

  res.json(category);
} catch (error) {
  console.error('Error updating category:', error);
  res.status(500).json({ error: 'Error updating category'});
}
});

  // delete a category by its `id` value
router.delete('/:id',async (req, res) => {
try {
  const categoryId = req.params.id;
  const category = await Category.findByPk(categoryId); // Finds category by its id.

  if (!category) {
    return res.status(404).json({ error: 'Category not found' }); // in case there no category with the selected id.
  }

  await category.destroy(); // deletes category

  res.json({ message: 'Category deleted successfully' });

} catch (error) {
  console.error('Error deleting category:', error);  //TENGO QUE BORRAR ESTE MUGREROOOO!!!!!
  res.status(500).json({ error: 'Error deleting category' });
}
});

module.exports = router;
