import { decryptMedia, Client, Message } from '@open-wa/wa-automate'

export default async function CreateAnimatedStickerFromVideo(client: Client, message: Message) {
  const { mimetype, from, sender } = message;

  await client.sendText(
    from,
    `*${sender.pushname}*, Obrigado por usar o Botzin_do_Civa 🤖... 
    Estou processando sua Figurinha de video. 😻`

  );

  const mediaData = await decryptMedia(message);
  let base64data = mediaData.toString('base64');

  await client.sendMp4AsSticker(
    from,
    `data:${mimetype};base64,${base64data}`
  )
}