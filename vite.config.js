import reactPlugin from '@vitejs/plugin-react'

export default {
  plugins: [reactPlugin()],
  server: {
    host: '0.0.0.0',
    hmr: {
      clientPort: 443,
    }
  }
}
