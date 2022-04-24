import app from './server'

app.listen(
  app.get('port'), 
  async () => console.log('Server running on port', app.get('port'))
)