import typeorm from 'typeorm';

const Movies = new typeorm.EntitySchema({
  name: 'Movies',
  columns: {
    id: {
      primary: true,
      generated: 'uuid',
      type: String,
    },
    titre: { type: String },
    date: { type: Date },
  },
});

export default Movies;
