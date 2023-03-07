import fastify from 'fastify'

const app = fastify()

app.listen(
  {
    host: '0.0.0.0',
    port: Number(process.env.PORT ?? 3333),
  },
  (err, address) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }

    console.log(`server listening on ${address}`)
  },
)
