module.exports = {
  apps: [
    {
      name: 'nuxt-sample',
      script: './node_modules/nuxt-start/bin/nuxt-start.js',
      instances: 'max', /* 負載平衡模式下的 CPU 數量 */
      exec_mode: 'cluster', /* CPU 負載平衡模式 */
      max_memory_restart: '1G', /* 緩存了多少記憶體重新整理 */
      port: 3001, /* 指定伺服器上的 port */
    },
  ],
};