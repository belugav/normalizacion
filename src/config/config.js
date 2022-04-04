import dotenv  from "dotenv"

const result= await dotenv.config({ path: './src/.env' })
if (result.error) {
    throw result.error
}
console.log(result.parsed)


//Configuración de la aplicación
export default {
    env: result.parsed,
    fileSystem: {
        pathImg: './public/images/',
        pathviews: './src/views/'
    },
    //Configuración de la base de datos mongodb
    firebase: {
        "type": "service_account",
        "project_id": "ecommerce-f1b32",
        "private_key_id": "296e451d770e8a0401b81a26d76ed3c65938f810",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCeUlUaUj71HqlO\nxtJzyPms5ZaHdevpQIJxGEJFwYDiBdbs/vArHYIE+jx9Iibe5q0PVT6GqAZL4+e9\n+9349+LgSQAj7D4uMPH5qB5dP4EzqyzHWKuHNOJrD0WLFk+4YNzyK+aIFamp6V9i\nn22zv0V+XBaHA0u190vwPtEm8nsZu08fHCN/Mg3wYMdAFIz6OQMjaXv1bzUHmQ50\nHtCHAgIfsAjRcdBza4OlaRW0CL+8VdxntRUub2STkAjENQANjMn727MzE+3pS54+\nt7LcU1CzPOCNC2G5Kifurc/C1U+3xmW34yfPvwqblHlWmPZdsGdjKDvRFzx9hWNd\n7C+TE68HAgMBAAECggEAMhm1yp2KRMFOLJqoUHGh6P/CUd2UKPz8ClP17OMeKOhW\nKitGzy4IThDuAV9EU7dFvptoLO6RB4T4edtxU+8FwZn4TGXfC3j7qdh0u2d0OGiL\nxA2gQioPGHf9ttT5p0wnvw77ZccNKLKsN6Zh7caydBkqG9GELPIz+rO2Ng/3up1W\n7UwBxbq4wUxGKynxc7KrNjY2Dmq9Om9bsa8Iwa7eWcgHYI4P9mmC3qxemFqpNMTn\n7BDeyxcKS1xQFlWm1OtZyw1zfTf4Un/s9vryQV9m+apePuFTE4fCPY9uP/JrI+vV\n68KXJn+/iAGARQ2iDsF+BK7gxMk/GdqODyVJZHSGaQKBgQDW4hY760F3jm2aXYZ2\nuQ/9yV/79k2Jv1u3uT1oBlVYbPDIWK9QbbRISeGNMy5Z/6bUCOEov0P6RkfEMqT3\n/xlZ3L14b07b/hJzkohnrzVrSxFtMB6qc7tMzIP0uO2TDEndes/AkdTw9bMVs54K\nYsk47g3ZasKLGC0Y47f6KQs+nQKBgQC8nZ1mfRweTQ0kILSEqamCdWLOA70CTfKV\nI+Sy1078EscjO/LFSleJ3MeFSPTxNJQdTlbFRH+x0USe8U4ZxnWHE4MF6YlUytFJ\nfxf19mA3LzLL3ZpL2BfFzJyuTL05Ole2WRcSDjgKBg0h74N0y4U5HtIOUTj7eGh5\nj4eouMBA8wKBgQDDWsW18boR9EWGijJdqv9zzWjay2BQs8yxadH+yYs7mccJjT7N\nEv9MnQZWdUpVfctwhyYUAlbNqKlEIHrED4I/pSQH4sHB1Ol3cqdaA/q/sX6FUrL+\nabrFJkVs7dbm0cwxc55+RtZdvjHyr9olPQwNGrcyixGUnQUa1KQE5N2ZLQKBgDGS\nGvP8nY85IOMF1WuoS2yF/Vm3kc0xPzgDHvABtjh5luyjrMI9L5SD+cwFyJo7/1FU\nbWma/xR0s1wyfxw3FFxTvHOpVPZ791UhmeKCxfa66Na7fvm/6T+K7wLAGFsaAkNi\nVrXgFspLnNf2Ys4nTvQcLYilwBwXIR4Ros2tAJoRAoGAUPYckQcX8MeHR7B1W/2s\nsHvUGRdcRz8NuXt1lc59VdsJZckZdrOQmz2RM4Ipo6vGvCDKhFjy2P+Rftu2jTaa\nfUbkdwloOWv2eyaSYGlgDhvXYyqH5/kKoookfMuKEgM7OP5MLxRmFrHoaM9eNPhh\nHT+z89cUD64XF2I/bXG+Fxw=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-7reqv@ecommerce-f1b32.iam.gserviceaccount.com",
        "client_id": "116815207541671170491",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7reqv%40ecommerce-f1b32.iam.gserviceaccount.com"

    },
    mongodb:{
        cnxStr: ' mongodb+srv://beluecommerce:sanisidro@cluster0.tfvsd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        }
    }
}


