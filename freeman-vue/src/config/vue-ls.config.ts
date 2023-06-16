import VueStoragePlugin from 'vue-ls';
const WebStorage = VueStoragePlugin.useStorage({
    namespace: 'pro__', 
    name: 'ls',
    storage: 'local',
})

export default WebStorage