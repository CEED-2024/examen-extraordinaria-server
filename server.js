const fastify = require('fastify')({ logger: true });

const items = ['Llama Carmesí', 'Niebla Azul', 'Atardecer Dorado', 'Susurro Esmeralda', 'Marea Zafiro', 'Brillo Amatista', 'Chispa Rubí', 'Sombra Obsidiana', 'Destello Marfil', 'Tormenta Cobalto'];

const FAIL_RATE = 0.1; // 20% failure rate

fastify.get('/combo', async (request, reply) => {
  if (Math.random() < FAIL_RATE) {
    reply.code(500).send({ error: 'Internal Server Error' });
    return;
  }
  const count = Math.floor(Math.random() * 8) + 3; // Random number between 3 and 10
  const shuffled = items.sort(() => 0.5 - Math.random());
  const selectedItems = shuffled.slice(0, count);
  return { combo: selectedItems };
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
