import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ���J���郊�|�W�g�����ɍ��킹�Đݒ肵�܂�
  base: '/portaltest/', 
})
