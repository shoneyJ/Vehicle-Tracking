import { createClient } from 'redis';
(async () => {

    const client = createClient();
  
    const subscriber = client.duplicate();
  
    await subscriber.connect();
  
    await subscriber.subscribe('gps', (message) => {
      console.log(message); // 'message'
    });
  
  })();