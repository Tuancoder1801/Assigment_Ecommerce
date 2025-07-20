import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // bắt buộc để truy cập từ ngoài container
    port: 5173,       // cổng mặc định của Vite
    strictPort: true, // đảm bảo không tự nhảy sang cổng khác
  },
})
