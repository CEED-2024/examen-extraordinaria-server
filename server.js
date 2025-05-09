const fastify = require('fastify')({ logger: true });
const fastifyCors = require('@fastify/cors');

fastify.register(fastifyCors, {
  origin: '*'
});

const items = [
  { id: 1, caption: 'Llama Carmesí', hex: '#DC143C' },
  { id: 2, caption: 'Niebla Azul', hex: '#4682B4' },
  { id: 3, caption: 'Atardecer Dorado', hex: '#FFD700' },
  { id: 4, caption: 'Susurro Esmeralda', hex: '#50C878' },
  { id: 5, caption: 'Marea Zafiro', hex: '#0F52BA' },
  { id: 6, caption: 'Brillo Amatista', hex: '#9966CC' },
  { id: 7, caption: 'Chispa Rubí', hex: '#E0115F' },
  { id: 8, caption: 'Sombra Obsidiana', hex: '#3B3C36' },
  { id: 9, caption: 'Destello Marfil', hex: '#FFFFF0' },
  { id: 10, caption: 'Tormenta Cobalto', hex: '#0047AB' }
];

const FAIL_RATE = 0.1; // 20% failure rate

fastify.get('/combo/:id', async (request, reply) => {
  // Ignoring the id parameter for now
  if (Math.random() < FAIL_RATE) {
    reply.code(500).send({ error: 'Internal Server Error' });
    return;
  }
  const count = Math.floor(Math.random() * 8) + 3; // Random number between 3 and 10
  const shuffled = items.sort(() => 0.5 - Math.random());
  const selectedItems = shuffled.slice(0, count).map(item => ({
    id: item.id,
    caption: item.caption
  }));
  return { combo: selectedItems };
});

fastify.get('/color/:color', async (request, reply) => {
  const colorId = parseInt(request.params.color, 10);
  const colorItem = items.find(item => item.id === colorId);

  if (!colorItem) {
    reply.code(404).send({ error: 'Color not found' });
    return;
  }

  return { hex: colorItem.hex };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('Server is running at http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
