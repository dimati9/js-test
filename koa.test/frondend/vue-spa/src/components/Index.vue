<template>
    <div id="index">
        <h2>Текст приведствия</h2>
        <main>
        <div class="images">
            <img v-for="(item, i) in images" :src="item" alt="">
        </div>
        </main>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                images: ['https://avatars.mds.yandex.net/get-pdb/477388/b6b1f12d-1e19-4b28-9488-e119428d1837/s1200',
                'https://avatars.mds.yandex.net/get-pdb/38069/50d981ef-a2e1-4a32-8803-0dbd0f6d86e6/s1200',
                'https://avatars.mds.yandex.net/get-pdb/25978/294cfece-5a7f-46e6-9c78-c50efd8c1c65/s1200',
                'https://avatars.mds.yandex.net/get-pdb/38069/e9902ae7-d588-4c8c-b054-7ebb58899ec9/s1200',
                'https://avatars.mds.yandex.net/get-pdb/992060/8b6c93c1-a96a-4cc6-af18-e782d068e701/s1200'],
            }
        },

    }
</script>

<style lang="scss">
    .images {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        img {
            height: 200px;
            margin: 20px;
        }
    }
</style>