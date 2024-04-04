const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
  // find all tags
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tags);

  } catch (error) {
    console.error('Error fetching tags:', error); // BORRAR SI ES INNECESARIOOOO/////////////////////////////////////////////////////
    res.status(500).json({ error: 'Error fetching tags' });
  }
});

  // find a single tag by its `id`
router.get('/:id', async (req, res) => {
  try {
    const tagId = req.params.id;
    const tag = await Tag.findOne({ // Together with the 'where', finds 1 tag depending on the id.
      where: { id: tagId },
      include: { model: Product },
    });

    if (tag) {
      res.status(200).json(tag);
    } else {
      res.status(404).json({ error: 'Tag not found' });
    }

  } catch (error) {
    console.error('Error fetching tag:', error); // BORRAR SI ES INNECESARIOOOO/////////////////////////////////////////////////////
    res.status(500).json({ error: 'Error fetching tag' });
  }
});

  // create a new tag
router.post('/', async (req, res) => {
  try {
    const { tag_name } = req.body;
    const newTag = await Tag.create({ tag_name });

    res.status(201).json(newTag); // Status 201 = created

  } catch (error) {
    console.error('Error creating tag:', error); // BORRAR SI ES INNECESARIOOOO/////////////////////////////////////////////////////
    res.status(400).json({ error: 'Error creating tag' }); // Status 400 = Bad Request
  }
});

  // update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const tagId = req.params.id;
    const { tag_name } = req.body;
    // Find the tag by its id and update its name
    const [updatedRowCount] = await Tag.update(
      { tag_name },
      { where: { id: tagId } }
    );

    if (updatedRowCount > 0) {
      res.status(200).json({ message: 'Tag updated successfully' });
    } else {
      res.status(404).json({ error: 'Tag not found' });
    }

  } catch (error) {
    console.error('Error updating tag:', error); // BORRAR SI ES INNECESARIOOOO/////////////////////////////////////////////////////
    res.status(500).json({ error: 'Error updating tag' });
  }
});

  // delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tagId = req.params.id;
    const deleteRowCount = await Tag.destroy({ where: { id: tagId } });

    if (deleteRowCount > 0) {
      res.status(200).json({ message: 'Tag deleted successfully' });
    } else {
      res.status(404).json({ error: 'Tag not found' });
    }

  } catch (error) {
    console.error('Error deleting tag:', error); // BORRAR SI ES INNECESARIOOOO/////////////////////////////////////////////////////
    res.status(500).json({ error: 'Error deleting tag' });
  }
});

module.exports = router;
