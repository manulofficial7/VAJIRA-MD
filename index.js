const {
    default: makeWASocket,
    getAggregateVotesInPollMessage,
    useMultiFileAuthState,
    DisconnectReason,
    getDevice,
    fetchLatestBaileysVersion,
    jidNormalizedUser,
    getContentType,
    Browsers,
    makeInMemoryStore,
    makeCacheableSignalKeyStore,
    downloadContentFromMessage,
    generateWAMessageFromContent,
    prepareWAMessageMedia,
    proto,
  } = require('@whiskeysockets/baileys'),
  fs = require('fs'),
  P = require('pino'),
  FileType = require('file-type'),
  l = console.log
var config = require('./settings')
const { searchSinhalasub, downSinhalasub } = require('./lib/movie.js'),
  {
    pinterest,
    wallpaper,
    wikimedia,
    quotesAnime,
    aiovideodl,
    umma,
    ringtone,
    styletext,
    sync,
    updatedb,
    syncgit,
  } = require('./lib/scraper'),
  qrcode = require('qrcode-terminal'),
  moment = require('moment-timezone'),
  NodeCache = require('node-cache'),
  pino = require('pino'),
  X = require('./settings.js')
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid,
} = require('./lib/exif')
var { get_set, input_set } = require('./lib/set_db'),
  {
    updateCMDStore,
    isbtnID,
    getCMDStore,
    getCmdForCmdId,
    connectdb,
    input,
    get,
    updb,
    updfb,
  } = require('./lib/database')
const ownerNumber = global.owner,
  owner = global.owner
var prefix = config.PREFIX,
  prefixRegex =
    config.prefix === 'false' || config.prefix === 'null'
      ? '^'
      : new RegExp('^[' + config.PREFIX + ']')
const ownername = '_VAJIRA RATHNAYAKA_',
  botname =
    '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB',
  util = require('util'),
  {
    smsg,
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
    fetchBuffer,
    getFile,
  } = require('./lib/functions'),
  { sms, downloadMediaMessage } = require('./lib/msg'),
  axios = require('axios'),
  { File } = require('megajs'),
  path = require('path'),
  msgRetryCounterCache = new NodeCache()
function genMsgId() {
  const _0xf7decf = 'VajiraTech',
    _0x4c27b9 = '3EB',
    _0x4763d4 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let _0x38f1d3 = _0x4c27b9
  for (let _0x1e5475 = _0x4c27b9.length; _0x1e5475 < 22; _0x1e5475++) {
    const _0x1e0814 = Math.floor(Math.random() * _0x4763d4.length)
    _0x38f1d3 += _0x4763d4.charAt(_0x1e0814)
  }
  return _0x38f1d3
}
if (!fs.existsSync(__dirname + '/session/creds.json')) {
  if (config.SESSION_ID) {
    const sessdata = config.SESSION_ID.replace('VAJIRA-MD=', ''),
      filer = File.fromURL('https://mega.nz/file/' + sessdata)
    filer.download((_0x16bc8e, _0x1d1d23) => {
      if (_0x16bc8e) {
        throw _0x16bc8e
      }
      fs.writeFile(__dirname + '/session/creds.json', _0x1d1d23, () => {
        console.log('Session download completed !! \u2713')
      })
    })
  }
}
const express = require('express'),
  app = express(),
  port = process.env.PORT || 8000
async function connectToWA() {
  const { version: _0x3cfacf, isLatest: _0x5ee9a6 } =
    await fetchLatestBaileysVersion()
  console.log('using WA v' + _0x3cfacf.join('.') + ', isLatest: ' + _0x5ee9a6)
  const { state: _0x2b2e08, saveCreds: _0x3d4cac } =
    await useMultiFileAuthState(__dirname + '/session/')
  const _0x2c419a = makeWASocket({
    logger: P({ level: 'fatal' }).child({ level: 'fatal' }),
    printQRInTerminal: true,
    generateHighQualityLinkPreview: true,
    auth: _0x2b2e08,
    defaultQueryTimeoutMs: undefined,
    msgRetryCounterCache: msgRetryCounterCache,
  })
  _0x2c419a.ev.on('connection.update', async (_0x3817e4) => {
    const { connection: _0x24277b, lastDisconnect: _0x38270d } = _0x3817e4
    if (_0x24277b === 'close') {
      if (_0x38270d.error.output.statusCode !== DisconnectReason.loggedOut) {
        connectToWA()
      }
    } else {
      if (_0x24277b === 'open') {
        console.log('Installing plugins \uD83D\uDD0C... ')
        const _0x1508f2 = require('path')
        fs.readdirSync('./plugins/').forEach((_0x115ac5) => {
          if (_0x1508f2.extname(_0x115ac5).toLowerCase() == '.js') {
            require('./plugins/' + _0x115ac5)
          }
        })
        console.log('Plugins installed \u2705')
        console.log('Bot connected \u2705')
        await _0x2c419a.sendMessage(ownerNumber + '@s.whatsapp.net', {
          text: 'Connected to whatsapp',
        })
      }
    }
  })
  _0x2c419a.ev.on('creds.update', _0x3d4cac)
  _0x2c419a.ev.on('messages.upsert', async (_0x5ec5ee) => {
    try {
      _0x5ec5ee = _0x5ec5ee.messages[0]
      if (!_0x5ec5ee.message) {
        return
      }
      var _0x16361b = require('./lib/id_db')
      _0x5ec5ee.message =
        getContentType(_0x5ec5ee.message) === 'ephemeralMessage'
          ? _0x5ec5ee.message.ephemeralMessage.message
          : _0x5ec5ee.message
      if (_0x5ec5ee.key && _0x5ec5ee.key.remoteJid === 'status@broadcast') {
        return
      }
      const _0x1b19d1 = sms(_0x2c419a, _0x5ec5ee)
      var _0x599ca7 = _0x1b19d1
      const _0x3d93a4 = getContentType(_0x5ec5ee.message),
        _0x4a8d83 = JSON.stringify(_0x5ec5ee.message),
        _0x43983b = _0x5ec5ee.key.remoteJid,
        _0x1a1e7c =
          _0x3d93a4 == 'extendedTextMessage' &&
          _0x5ec5ee.message.extendedTextMessage.contextInfo != null
            ? _0x5ec5ee.message.extendedTextMessage.contextInfo.quotedMessage ||
              []
            : [],
        _0x3a0e9a =
          _0x3d93a4 == 'extendedTextMessage' &&
          _0x5ec5ee.message.extendedTextMessage.contextInfo != null
            ? _0x5ec5ee.message.extendedTextMessage.contextInfo.stanzaId || null
            : null,
        _0x4cfd81 =
          _0x3d93a4 === 'conversation'
            ? _0x5ec5ee.message.conversation
            : _0x3d93a4 === 'extendedTextMessage'
            ? _0x5ec5ee.message.extendedTextMessage.text
            : _0x3d93a4 == 'interactiveResponseMessage'
            ? _0x5ec5ee.message.interactiveResponseMessage &&
              _0x5ec5ee.message.interactiveResponseMessage
                .nativeFlowResponseMessage &&
              JSON.parse(
                _0x5ec5ee.message.interactiveResponseMessage
                  .nativeFlowResponseMessage.paramsJson
              ) &&
              JSON.parse(
                _0x5ec5ee.message.interactiveResponseMessage
                  .nativeFlowResponseMessage.paramsJson
              ).id
            : _0x3d93a4 == 'templateButtonReplyMessage'
            ? _0x5ec5ee.message.templateButtonReplyMessage &&
              _0x5ec5ee.message.templateButtonReplyMessage.selectedId
            : _0x3d93a4 === 'extendedTextMessage'
            ? _0x5ec5ee.message.extendedTextMessage.text
            : _0x3d93a4 == 'imageMessage' &&
              _0x5ec5ee.message.imageMessage.caption
            ? _0x5ec5ee.message.imageMessage.caption
            : _0x3d93a4 == 'videoMessage' &&
              _0x5ec5ee.message.videoMessage.caption
            ? _0x5ec5ee.message.videoMessage.caption
            : ''
      ;(await isbtnID(
        _0x5ec5ee.message?.extendedTextMessage?.contextInfo?.stanzaId
      )) &&
      getCmdForCmdId(
        await getCMDStore(
          _0x5ec5ee.message?.extendedTextMessage?.contextInfo?.stanzaId
        ),
        _0x5ec5ee?.message?.extendedTextMessage?.text
      )
        ? getCmdForCmdId(
            await getCMDStore(
              _0x5ec5ee.message?.extendedTextMessage?.contextInfo?.stanzaId
            ),
            _0x5ec5ee?.message?.extendedTextMessage?.text
          )
        : _0x3d93a4 === 'extendedTextMessage'
        ? _0x5ec5ee.message.extendedTextMessage.text
        : _0x3d93a4 == 'imageMessage' && _0x5ec5ee.message.imageMessage.caption
        ? _0x5ec5ee.message.imageMessage.caption
        : _0x3d93a4 == 'videoMessage' && _0x5ec5ee.message.videoMessage.caption
        ? _0x5ec5ee.message.videoMessage.caption
        : ''
      var _0x24cb27 = await get_set('all')
      config = await _0x16f193(config, _0x24cb27)
      prefix = config.PREFIX
      var _0x12f7ef = _0x4cfd81.startsWith(prefix),
        _0x327fcf = _0x12f7ef
          ? _0x4cfd81
              .slice(prefix.length)
              .trim()
              .split(' ')
              .shift()
              .toLowerCase()
          : '',
        _0x453efa = _0x4cfd81.trim().split(/ +/).slice(1),
        _0x4824de = _0x453efa.join(' ')
      if (
        _0x599ca7.quoted &&
        _0x599ca7.quoted.fromMe &&
        (await _0x16361b.check(_0x599ca7.quoted.id))
      ) {
        if (_0x4cfd81.startsWith(prefix)) {
          _0x4cfd81 = _0x4cfd81.replace(prefix, '')
        }
        var _0x25a9c6 = await _0x16361b.get_data(_0x599ca7.quoted.id, _0x4cfd81)
        if (_0x25a9c6.cmd) {
          _0x12f7ef = true
          _0x327fcf = _0x25a9c6.cmd.startsWith(prefix)
            ? _0x25a9c6.cmd
                .slice(prefix.length)
                .trim()
                .split(' ')
                .shift()
                .toLowerCase()
            : ''
          _0x453efa = _0x25a9c6.cmd.trim().split(/ +/).slice(1)
          _0x4824de = _0x453efa.join(' ')
        }
      }
      console.log(_0x327fcf)
      const _0x57fc37 = _0x43983b.endsWith('@g.us'),
        _0x495cf8 = _0x5ec5ee.key.fromMe
          ? _0x2c419a.user.id.split(':')[0] + '@s.whatsapp.net' ||
            _0x2c419a.user.id
          : _0x5ec5ee.key.participant || _0x5ec5ee.key.remoteJid,
        _0x86bfc9 = _0x495cf8.split('@')[0],
        _0x534077 = _0x2c419a.user.id.split(':')[0],
        _0x2d0dec = _0x5ec5ee.pushName || 'Sin Nombre',
        _0x5342d4 = '94701992015',
        _0x30e051 = _0x534077.includes(_0x86bfc9),
        _0x5858ea = _0x5342d4.includes(_0x86bfc9),
        _0x5b62ca = _0x30e051 ? _0x30e051 : _0x5858ea,
        _0x3e636e = ownerNumber.includes(_0x86bfc9) || _0x5b62ca,
        _0x237e3b = await jidNormalizedUser(_0x2c419a.user.id),
        _0x397f5f = _0x57fc37
          ? await _0x2c419a.groupMetadata(_0x43983b).catch((_0x41f384) => {})
          : '',
        _0x3defe1 = _0x57fc37 ? _0x397f5f.subject : '',
        _0x19170e = _0x57fc37 ? await _0x397f5f.participants : '',
        _0x1a47c1 = _0x57fc37 ? await getGroupAdmins(_0x19170e) : '',
        _0x12dcb0 = _0x57fc37 ? _0x1a47c1.includes(_0x237e3b) : false,
        _0x12043f = _0x57fc37 ? _0x1a47c1.includes(_0x495cf8) : false,
        _0x40dd93 = _0x1b19d1.message.reactionMessage ? true : false
      autoreadsw = false
      const _0x181aa7 = (_0x55fc42) => {
          let _0x53cca1 = _0x55fc42
          for (let _0xbc37f8 = 0; _0xbc37f8 < _0x53cca1.length; _0xbc37f8++) {
            if (_0x53cca1[_0xbc37f8] === _0x43983b) {
              return true
            }
          }
          return false
        },
        _0x39acac = (_0x17f0e9) => {
          const _0x57c632 = {}
          return (
            (_0x57c632.text = _0x17f0e9),
            _0x2c419a.sendMessage(_0x43983b, _0x57c632)
          )
        },
        _0x59c067 = (_0x416f72, _0x1e06af) => {
          const _0x26f571 = {
            text: _0x416f72,
            key: _0x1e06af.key,
          }
          const _0x74e6f = {}
          return (
            (_0x74e6f.react = _0x26f571),
            _0x2c419a.sendMessage(_0x43983b, _0x74e6f)
          )
        },
        _0x36c396 = (_0x923691) => {
          const _0x1c3cb7 = {}
          return (
            (_0x1c3cb7.text = _0x923691),
            _0x2c419a.sendMessage(_0x43983b, _0x1c3cb7)
          )
        }
      _0x2c419a.storenumrepdata = async (_0x394e02) => {
        return await storenumrepdata(_0x394e02)
      }
      const _0x1f11fb = (
        await axios.get(
          'https://gist.githubusercontent.com/manulofficial7/e30814337ae40cc8c40c47b19fbe33ed/raw'
        )
      ).data
      config.LOGO = _0x1f11fb.imageurl
      config.BTN = _0x1f11fb.button
      config.CONTACT = _0x1f11fb.contact
      config.FOOTER = _0x1f11fb.footer
      config.BTNURL = _0x1f11fb.buttonurl
      _0x2c419a.edit = async (_0x32dcae, _0x5967be) => {
        const _0x4f1e47 = { conversation: _0x5967be }
        const _0x25b4f3 = {
          key: _0x32dcae.key,
          type: 14,
          editedMessage: _0x4f1e47,
        }
        const _0x565a13 = { protocolMessage: _0x25b4f3 }
        await _0x2c419a.relayMessage(_0x43983b, _0x565a13, {})
      }
      _0x2c419a.sendFileUrl = async (
        _0x50c64c,
        _0x325567,
        _0x1fdd72,
        _0x2d55ca,
        _0x17ee5e = {}
      ) => {
        let _0x5e2e3f = '',
          _0x5e855f = await axios.head(_0x325567)
        _0x5e2e3f = _0x5e855f.headers['content-type']
        if (_0x5e2e3f.split('/')[1] === 'gif') {
          return _0x2c419a.sendMessage(
            _0x50c64c,
            {
              video: await getBuffer(_0x325567),
              caption: _0x1fdd72,
              gifPlayback: true,
              ..._0x17ee5e,
            },
            {
              quoted: _0x2d55ca,
              ..._0x17ee5e,
            }
          )
        }
        let _0xb91160 = _0x5e2e3f.split('/')[0] + 'Message'
        if (_0x5e2e3f === 'application/pdf') {
          return _0x2c419a.sendMessage(
            _0x50c64c,
            {
              document: await getBuffer(_0x325567),
              mimetype: 'application/pdf',
              caption: _0x1fdd72,
              ..._0x17ee5e,
            },
            {
              quoted: _0x2d55ca,
              ..._0x17ee5e,
            }
          )
        }
        if (_0x5e2e3f.split('/')[0] === 'image') {
          return _0x2c419a.sendMessage(
            _0x50c64c,
            {
              image: await getBuffer(_0x325567),
              caption: _0x1fdd72,
              ..._0x17ee5e,
            },
            {
              quoted: _0x2d55ca,
              ..._0x17ee5e,
            }
          )
        }
        if (_0x5e2e3f.split('/')[0] === 'video') {
          return _0x2c419a.sendMessage(
            _0x50c64c,
            {
              video: await getBuffer(_0x325567),
              caption: _0x1fdd72,
              mimetype: 'video/mp4',
              ..._0x17ee5e,
            },
            {
              quoted: _0x2d55ca,
              ..._0x17ee5e,
            }
          )
        }
        if (_0x5e2e3f.split('/')[0] === 'audio') {
          return _0x2c419a.sendMessage(
            _0x50c64c,
            {
              audio: await getBuffer(_0x325567),
              caption: _0x1fdd72,
              mimetype: 'audio/mpeg',
              ..._0x17ee5e,
            },
            {
              quoted: _0x2d55ca,
              ..._0x17ee5e,
            }
          )
        }
      }
      _0x2c419a.sendButtonMessage = async (
        _0x526bec,
        _0x2ed24e,
        _0x13ab45,
        _0x1524f3 = {}
      ) => {
        let _0x1018c6
        if (_0x1524f3?.video) {
          const _0x135d1a = {
            url: _0x1524f3 && _0x1524f3.video ? _0x1524f3.video : '',
          }
          const _0x16f078 = { video: _0x135d1a }
          const _0x423751 = { upload: _0x2c419a.waUploadToServer }
          var _0x3e90c2 = await prepareWAMessageMedia(_0x16f078, _0x423751)
          const _0x5327d6 = {
            title: _0x1524f3 && _0x1524f3.header ? _0x1524f3.header : '',
            hasMediaAttachment: true,
            videoMessage: _0x3e90c2.videoMessage,
          }
          _0x1018c6 = _0x5327d6
        } else {
          if (_0x1524f3?.image) {
            const _0x3bdfa0 = {
              url: _0x1524f3 && _0x1524f3.image ? _0x1524f3.image : '',
            }
            const _0x23c752 = { image: _0x3bdfa0 }
            const _0x4cabc4 = { upload: _0x2c419a.waUploadToServer }
            var _0x3bf714 = await prepareWAMessageMedia(_0x23c752, _0x4cabc4)
            const _0x1e16fd = {
              title: _0x1524f3 && _0x1524f3.header ? _0x1524f3.header : '',
              hasMediaAttachment: true,
              imageMessage: _0x3bf714.imageMessage,
            }
            _0x1018c6 = _0x1e16fd
          } else {
            const _0x9b3a0c = {
              title: _0x1524f3 && _0x1524f3.header ? _0x1524f3.header : '',
              hasMediaAttachment: false,
            }
            _0x1018c6 = _0x9b3a0c
          }
        }
        const _0x1de6d2 = {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
        }
        const _0xb8dc82 = {
          text: _0x1524f3 && _0x1524f3.body ? _0x1524f3.body : '',
        }
        const _0x40f677 = {
          text: _0x1524f3 && _0x1524f3.footer ? _0x1524f3.footer : '',
        }
        const _0xdc9496 = {
          buttons: _0x2ed24e,
          messageParamsJson: '',
        }
        const _0x35a979 = {
          body: _0xb8dc82,
          footer: _0x40f677,
          header: _0x1018c6,
          nativeFlowMessage: _0xdc9496,
        }
        const _0x350a8f = {
          messageContextInfo: _0x1de6d2,
          interactiveMessage: _0x35a979,
        }
        const _0x195f78 = { message: _0x350a8f }
        const _0x250f3c = { viewOnceMessage: _0x195f78 }
        const _0x4f07e8 = { quoted: _0x13ab45 }
        let _0x1e963f = generateWAMessageFromContent(
          _0x526bec,
          _0x250f3c,
          _0x4f07e8
        )
        return (
          await _0x2c419a.sendPresenceUpdate('composing', _0x526bec),
          await sleep(1000),
          await _0x2c419a.relayMessage(_0x526bec, _0x1e963f.message, {
            messageId: _0x1e963f.key.id,
          })
        )
      }
      function _0x16f193(_0x5e21b0, _0x14f82e) {
        for (var _0x15d4b2 in _0x14f82e) {
          _0x5e21b0[_0x15d4b2] = _0x14f82e[_0x15d4b2]
        }
        return _0x5e21b0
      }
      var _0x24cb27 = await get_set('all')
      config = await _0x16f193(config, _0x24cb27)
      _0x2c419a.replyad = async (_0x5d6407) => {
        const _0x5d2f91 = {
          newsletterJid: '120363182681793169@newsletter',
          serverMessageId: 127,
        }
        const _0x2b48f1 = {
          title:
            '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB',
          body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
          mediaType: 1,
          sourceUrl: 'https://wa.me/94701992015',
          thumbnailUrl: 'https://telegra.ph/file/8aaa9451a1eb739d3a73a.jpg',
          renderLargerThumbnail: false,
          showAdAttribution: true,
        }
        const _0x53a431 = {
          mentionedJid: [''],
          groupMentions: [],
          forwardingScore: 1,
          isForwarded: true,
          forwardedNewsletterMessageInfo: _0x5d2f91,
          externalAdReply: _0x2b48f1,
        }
        const _0xc4fb55 = {
          text: _0x5d6407,
          contextInfo: _0x53a431,
        }
        const _0x284134 = {}
        return (
          (_0x284134.quoted = _0x5ec5ee),
          await _0x2c419a.sendMessage(_0x43983b, _0xc4fb55, _0x284134)
        )
      }
      _0x2c419a.buttonMessage2 = async (_0x7571f, _0x4d8524, _0x454c56) => {
        let _0x52f95f = ''
        const _0x33b8ed = []
        _0x4d8524.buttons.forEach((_0x30d1ad, _0x2f7d1d) => {
          const _0x521818 = '' + (_0x2f7d1d + 1)
          _0x52f95f +=
            '\n' + _0x521818 + ' | ' + _0x30d1ad.buttonText.displayText + '\n'
          const _0x1ffb4b = {
            cmdId: _0x521818,
            cmd: _0x30d1ad.buttonId,
          }
          _0x33b8ed.push(_0x1ffb4b)
        })
        if (_0x4d8524.headerType === 1) {
          const _0x52afbe =
              _0x4d8524.text +
              '\n\n\uD83D\uDD22 Reply you want number,' +
              _0x52f95f +
              '\n' +
              _0x4d8524.footer,
            _0x4b921b = {
              newsletterJid: '120363182681793169@newsletter',
              serverMessageId: 127,
            }
          const _0x16a1cb = {
            title:
              '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB',
            body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
            mediaType: 1,
            sourceUrl: 'https://wa.me/94701992015',
            thumbnailUrl: 'https://telegra.ph/file/8aaa9451a1eb739d3a73a.jpg',
            renderLargerThumbnail: false,
            showAdAttribution: true,
          }
          const _0x3a699f = {
            mentionedJid: [''],
            groupMentions: [],
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: _0x4b921b,
            externalAdReply: _0x16a1cb,
          }
          const _0x397c69 = {
            text: _0x52afbe,
            contextInfo: _0x3a699f,
          }
          const _0x3a44cc = await _0x2c419a.sendMessage(_0x43983b, _0x397c69, {
            quoted: _0x454c56 || _0x5ec5ee,
          })
          await updateCMDStore(_0x3a44cc.key.id, _0x33b8ed)
        } else {
          if (_0x4d8524.headerType === 4) {
            const _0x2f2679 =
                _0x4d8524.caption +
                '\n\n\uD83D\uDD22 Reply you want number,' +
                _0x52f95f +
                '\n' +
                _0x4d8524.footer,
              _0x3394bd = {
                newsletterJid: '120363182681793169@newsletter',
                serverMessageId: 127,
              }
            const _0x5deb88 = {
              title:
                '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB',
              body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
              mediaType: 1,
              sourceUrl: 'https://wa.me/94701992015',
              thumbnailUrl: 'https://telegra.ph/file/8aaa9451a1eb739d3a73a.jpg',
              renderLargerThumbnail: false,
              showAdAttribution: true,
            }
            const _0x1e5ebb = {
              mentionedJid: [''],
              groupMentions: [],
              forwardingScore: 1,
              isForwarded: true,
              forwardedNewsletterMessageInfo: _0x3394bd,
              externalAdReply: _0x5deb88,
            }
            const _0x15ebfd = {
              image: _0x4d8524.image,
              caption: _0x2f2679,
              contextInfo: _0x1e5ebb,
            }
            const _0x4a0cf5 = await _0x2c419a.sendMessage(_0x7571f, _0x15ebfd, {
              quoted: _0x454c56 || _0x5ec5ee,
            })
            await updateCMDStore(_0x4a0cf5.key.id, _0x33b8ed)
          }
        }
      }
      _0x2c419a.replyList = async (_0x392ce6, _0x4a570f, _0xeeaffc) => {
        function _0x3b9f52(_0x19bb8f) {
          let _0x11bb5d = ''
          return (
            _0x19bb8f.forEach((_0x7daef2, _0x263e93) => {
              ;(_0x11bb5d += _0x7daef2.title ? _0x7daef2.title + '\n' : ''),
                _0x7daef2.rows.forEach((_0x5909c7, _0x548e99) => {
                  _0x11bb5d += _0x5909c7.title + ' || ' + _0x5909c7.description
                  _0x11bb5d +=
                    _0x548e99 === _0x7daef2.rows.length - 1 ? '' : '\n'
                }),
                (_0x11bb5d += _0x263e93 === _0x19bb8f.length - 1 ? '' : '\n\n')
            }),
            _0x11bb5d
          )
        }
        if (!_0x4a570f.sections) {
          return false
        }
        _0x4a570f[_0x4a570f.caption ? 'caption' : 'text'] =
          (_0x4a570f.title ? _0x4a570f.title + '\n\n' : '') +
          (_0x4a570f.caption ? _0x4a570f.caption : _0x4a570f.text) +
          '\n\n' +
          _0x4a570f.buttonText +
          '\n\n' +
          (await _0x3b9f52(_0x4a570f.sections)) +
          '\n\n' +
          _0x4a570f.footer
        const _0x49735b = { ..._0x4a570f }
        var _0x63e44f = _0x49735b
        delete _0x4a570f.sections
        delete _0x4a570f.footer
        delete _0x4a570f.buttonText
        delete _0x4a570f.title
        const _0x29612c = await _0x2c419a.sendMessage(
            _0x392ce6,
            _0x4a570f,
            _0xeeaffc
          ),
          _0x3da8c9 = []
        _0x63e44f.sections.forEach((_0x37f5ad) => {
          _0x37f5ad.rows.forEach((_0x3fe69f) => {
            const _0x1a847e = {
              rowId: _0x3fe69f.rowId,
              title: _0x3fe69f.title,
            }
            _0x3da8c9.push(_0x1a847e)
          })
        })
        for (let _0x212ac0 = 0; _0x212ac0 < _0x3da8c9.length; _0x212ac0++) {
          await _0x16361b.input_data(
            _0x3da8c9[_0x212ac0].rowId,
            _0x3da8c9[_0x212ac0].title,
            _0x29612c.key.id
          )
        }
      }
      _0x2c419a.buttonMessage = async (_0x12803e, _0xca9e91, _0x747765) => {
        let _0x1054e7 = ''
        const _0x8f849c = []
        _0xca9e91.buttons.forEach((_0x32e852, _0x5dc532) => {
          const _0x18b99f = '' + (_0x5dc532 + 1)
          _0x1054e7 +=
            '\n' + _0x18b99f + ' | ' + _0x32e852.buttonText.displayText + '\n'
          const _0x1cdeec = {
            cmdId: _0x18b99f,
            cmd: _0x32e852.buttonId,
          }
          _0x8f849c.push(_0x1cdeec)
        })
        if (_0xca9e91.headerType === 1) {
          const _0xfb2614 =
              (_0xca9e91.text || _0xca9e91.caption) +
              '\n\uD83D\uDD22 Reply you want number,' +
              _0x1054e7 +
              '\n\n' +
              _0xca9e91.footer,
            _0x52cb28 = {
              newsletterJid: '120363182681793169@newsletter',
              serverMessageId: 127,
            }
          const _0x17dd6e = {
            title:
              '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB',
            body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
            mediaType: 1,
            sourceUrl: 'https://wa.me/94701992015',
            thumbnailUrl: 'https://telegra.ph/file/8aaa9451a1eb739d3a73a.jpg',
            renderLargerThumbnail: false,
            showAdAttribution: true,
          }
          const _0x11bd69 = {
            mentionedJid: [''],
            groupMentions: [],
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: _0x52cb28,
            externalAdReply: _0x17dd6e,
          }
          const _0x25fedc = {
            text: _0xfb2614,
            contextInfo: _0x11bd69,
          }
          const _0x16a37b = await _0x2c419a.sendMessage(_0x43983b, _0x25fedc, {
            quoted: _0x747765 || _0x5ec5ee,
          })
          await updateCMDStore(_0x16a37b.key.id, _0x8f849c)
        } else {
          if (_0xca9e91.headerType === 4) {
            const _0x12647d =
                _0xca9e91.caption +
                '\n\n\uD83D\uDD22 Reply you want number,' +
                _0x1054e7 +
                '\n' +
                _0xca9e91.footer,
              _0x525586 = {
                newsletterJid: '120363182681793169@newsletter',
                serverMessageId: 127,
              }
            const _0x3e6996 = {
              title:
                '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB',
              body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
              mediaType: 1,
              sourceUrl: 'https://wa.me/94701992015',
              thumbnailUrl: 'https://telegra.ph/file/8aaa9451a1eb739d3a73a.jpg',
              renderLargerThumbnail: false,
              showAdAttribution: true,
            }
            const _0x22c7fc = {
              mentionedJid: [''],
              groupMentions: [],
              forwardingScore: 1,
              isForwarded: true,
              forwardedNewsletterMessageInfo: _0x525586,
              externalAdReply: _0x3e6996,
            }
            const _0x53a15f = {
              image: _0xca9e91.image,
              caption: _0x12647d,
              contextInfo: _0x22c7fc,
            }
            const _0xe5f343 = await _0x2c419a.sendMessage(
              _0x12803e,
              _0x53a15f,
              { quoted: _0x747765 || _0x5ec5ee }
            )
            await updateCMDStore(_0xe5f343.key.id, _0x8f849c)
          }
        }
      }
      _0x2c419a.listMessage2 = async (_0x1e97a8, _0x49ef8e, _0x500aaf) => {
        let _0x597ccb = ''
        const _0x3235b5 = []
        _0x49ef8e.sections.forEach((_0x12ab72, _0x52db95) => {
          const _0x3e1a53 = '' + (_0x52db95 + 1)
          _0x597ccb += '\n[' + _0x3e1a53 + '] ' + _0x12ab72.title + '\n'
          _0x12ab72.rows.forEach((_0xbb6c02, _0x3fb488) => {
            const _0x3b302d = _0x3e1a53 + '.' + (_0x3fb488 + 1),
              _0x13cc84 = '   ' + _0x3b302d + ' | ' + _0xbb6c02.title
            _0x597ccb += _0x13cc84 + '\n'
            _0xbb6c02.description &&
              (_0x597ccb += '   ' + _0xbb6c02.description + '\n\n')
            const _0xcbf0d1 = {
              cmdId: _0x3b302d,
              cmd: _0xbb6c02.rowId,
            }
            _0x3235b5.push(_0xcbf0d1)
          })
        })
        const _0x12f8ea =
            _0x49ef8e.text +
            '\n\n' +
            _0x49ef8e.buttonText +
            ',' +
            _0x597ccb +
            '\n' +
            _0x49ef8e.footer,
          _0x403725 = {
            newsletterJid: '120363182681793169@newsletter',
            serverMessageId: 127,
          }
        const _0x9ec309 = {
          title:
            '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB',
          body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
          mediaType: 1,
          sourceUrl: 'https://wa.me/94701992015',
          thumbnailUrl: 'https://telegra.ph/file/8aaa9451a1eb739d3a73a.jpg',
          renderLargerThumbnail: false,
          showAdAttribution: true,
        }
        const _0x320f65 = {
          mentionedJid: [''],
          groupMentions: [],
          forwardingScore: 1,
          isForwarded: true,
          forwardedNewsletterMessageInfo: _0x403725,
          externalAdReply: _0x9ec309,
        }
        const _0x1fb618 = {
          text: _0x12f8ea,
          contextInfo: _0x320f65,
        }
        const _0x307d74 = await _0x2c419a.sendMessage(_0x43983b, _0x1fb618, {
          quoted: _0x500aaf || _0x5ec5ee,
        })
        await updateCMDStore(_0x307d74.key.id, _0x3235b5)
      }
      _0x2c419a.listMessage = async (_0x1ea0d8, _0x361b38, _0x3c80cb) => {
        let _0x510892 = ''
        const _0x375102 = []
        _0x361b38.sections.forEach((_0x24c216, _0x4a5e2f) => {
          const _0x5d16d6 = '' + (_0x4a5e2f + 1)
          _0x510892 += '\n[' + _0x5d16d6 + '] ' + _0x24c216.title + '\n'
          _0x24c216.rows.forEach((_0x5f1cba, _0x588a31) => {
            const _0x5459c8 = _0x5d16d6 + '.' + (_0x588a31 + 1),
              _0x3c11c2 = '   ' + _0x5459c8 + ' | ' + _0x5f1cba.title
            _0x510892 += _0x3c11c2 + '\n'
            if (_0x5f1cba.description) {
              _0x510892 += '   ' + _0x5f1cba.description + '\n\n'
            }
            const _0x293dcb = {
              cmdId: _0x5459c8,
              cmd: _0x5f1cba.rowId,
            }
            _0x375102.push(_0x293dcb)
          })
        })
        const _0x96b5fb =
            _0x361b38.text +
            '\n\n' +
            _0x361b38.buttonText +
            ',' +
            _0x510892 +
            '\n' +
            _0x361b38.footer,
          _0x1f9418 = {
            newsletterJid: '120363182681793169@newsletter',
            serverMessageId: 127,
          }
        const _0x3d35ca = {
          title:
            '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB',
          body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
          mediaType: 1,
          sourceUrl: 'https://wa.me/94701992015',
          thumbnailUrl: 'https://telegra.ph/file/8aaa9451a1eb739d3a73a.jpg',
          renderLargerThumbnail: false,
          showAdAttribution: true,
        }
        const _0x2fef0f = {
          mentionedJid: [''],
          groupMentions: [],
          forwardingScore: 1,
          isForwarded: true,
          forwardedNewsletterMessageInfo: _0x1f9418,
          externalAdReply: _0x3d35ca,
        }
        const _0x3562ce = {
          text: _0x96b5fb,
          contextInfo: _0x2fef0f,
        }
        const _0x4335fb = await _0x2c419a.sendMessage(_0x43983b, _0x3562ce, {
          quoted: _0x3c80cb || _0x5ec5ee,
        })
        await updateCMDStore(_0x4335fb.key.id, _0x375102)
      }
      _0x2c419a.edite = async (_0x429a1d, _0x205c4c) => {
        const _0x59ee3c = { conversation: _0x205c4c }
        const _0x3d15b5 = {
          key: _0x429a1d.key,
          type: 14,
          editedMessage: _0x59ee3c,
        }
        const _0xeed2b6 = { protocolMessage: _0x3d15b5 }
        await _0x2c419a.relayMessage(_0x43983b, _0xeed2b6, {})
      }
      async function _0x485a59(_0x5bd93f) {
        if (store) {
          const _0x63871 = await store.loadMessage(
            _0x5bd93f.remoteJid,
            _0x5bd93f.id
          )
          return _0x63871?.message
        }
        const _0x20c792 = {}
        return (_0x20c792.conversation = 'Hai im vajira botwa'), _0x20c792
      }
      _0x2c419a.ev.on('messages.update', async (_0x4cde04) => {
        for (const { key: _0x5b05d7, update: _0x11ecf8 } of _0x4cde04) {
          if (_0x11ecf8.pollUpdates && _0x5b05d7.fromMe) {
            const _0x4f998f = await _0x485a59(_0x5b05d7)
            if (_0x4f998f) {
              const _0xd6e07 = {
                message: _0x4f998f,
                pollUpdates: _0x11ecf8.pollUpdates,
              }
              const _0x191572 = await getAggregateVotesInPollMessage(_0xd6e07)
              var _0x2e1a23 = _0x191572.filter(
                (_0x51eb7a) => _0x51eb7a.voters.length !== 0
              )[0]?.name
              if (_0x2e1a23 == undefined) {
                return
              }
              var _0x316b7b = prefix + _0x2e1a23
              try {
                setTimeout(async () => {
                  await _0x2c419a.sendMessage(_0x5b05d7.remoteJid, {
                    delete: _0x5b05d7,
                  })
                }, 10000)
              } catch (_0x55cd4d) {
                console.error('Error deleting message:', _0x55cd4d)
              }
              _0x2c419a.appenTextMessage(_0x316b7b, _0x4cde04)
            }
          }
        }
      })
      if (!_0x3e636e) {
        if (config.ANTI_DELETE === 'true') {
          if (!_0x1b19d1.id.startsWith('BAE5')) {
            const _0x3d3197 = 'message_data'
            !fs.existsSync(_0x3d3197) && fs.mkdirSync(_0x3d3197)
            function _0x11a210(_0x4b3d77, _0x5ed068) {
              const _0x49a867 = path.join(
                _0x3d3197,
                _0x4b3d77,
                _0x5ed068 + '.json'
              )
              try {
                const _0x4f5876 = fs.readFileSync(_0x49a867, 'utf8')
                return JSON.parse(_0x4f5876) || []
              } catch (_0x3eaf55) {
                return []
              }
            }
            function _0xa8ab13(_0x16f995, _0x37de16, _0x12d8a7) {
              const _0x41e565 = path.join(_0x3d3197, _0x16f995)
              if (!fs.existsSync(_0x41e565)) {
                const _0x4979e4 = { recursive: true }
                fs.mkdirSync(_0x41e565, _0x4979e4)
              }
              const _0x30e554 = path.join(_0x41e565, _0x37de16 + '.json')
              try {
                fs.writeFileSync(_0x30e554, JSON.stringify(_0x12d8a7, null, 2))
              } catch (_0x2f9c47) {
                console.error('Error saving chat data:', _0x2f9c47)
              }
            }
            function _0x5be84c(_0xd6aaab) {
              const _0x19ed47 = _0x43983b,
                _0x3f1c5e = _0xd6aaab.key.id,
                _0x5740d1 = _0x11a210(_0x19ed47, _0x3f1c5e)
              _0x5740d1.push(_0xd6aaab)
              _0xa8ab13(_0x19ed47, _0x3f1c5e, _0x5740d1)
            }
            const _0x4bdc7f =
              config.DELETEMSGSENDTO !== ''
                ? config.DELETEMSGSENDTO + '@s.whatsapp.net'
                : _0x43983b
            function _0xa32ccc(_0x32c662) {
              const _0x30d6d4 = _0x43983b,
                _0x3ec8e6 = _0x32c662.msg.key.id
              const _0x46ab6e = _0x11a210(_0x30d6d4, _0x3ec8e6),
                _0x32d70b = _0x46ab6e[0]
              if (_0x32d70b) {
                const _0x3055a7 = _0x32c662.sender.split('@')[0],
                  _0x23eddc = _0x32d70b.key.participant ?? _0x32c662.sender,
                  _0x5dd837 = _0x23eddc.split('@')[0]
                if (
                  _0x3055a7.includes(_0x534077) ||
                  _0x5dd837.includes(_0x534077)
                ) {
                  return
                }
                if (
                  _0x32d70b.message &&
                  _0x32d70b.message.conversation &&
                  _0x32d70b.message.conversation !== ''
                ) {
                  const _0x392910 = _0x32d70b.message.conversation
                  if (_0x57fc37 && _0x392910.includes('chat.whatsapp.com')) {
                    return
                  }
                  var _0x483f1c = '```'
                  const _0x1100cc = {
                    text:
                      '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                      _0x3055a7 +
                      '_\n  \uD83D\uDCE9 *Sent by:* _' +
                      _0x5dd837 +
                      '_\n\n> \uD83D\uDD13 Message Text: ' +
                      _0x483f1c +
                      _0x392910 +
                      _0x483f1c,
                  }
                  _0x2c419a.sendMessage(_0x4bdc7f, _0x1100cc)
                } else {
                  if (_0x32d70b.msg.type === 'MESSAGE_EDIT') {
                    const _0x2a046b = {
                      text:
                        '\u274C *edited message detected* ' +
                        _0x32d70b.message.editedMessage.message.protocolMessage
                          .editedMessage.conversation,
                    }
                    const _0x44f4a6 = { quoted: _0x5ec5ee }
                    _0x2c419a.sendMessage(_0x4bdc7f, _0x2a046b, _0x44f4a6)
                  } else {
                    if (
                      _0x32d70b.message &&
                      _0x32d70b.message.exetendedTextMessage &&
                      _0x32d70b.msg.text
                    ) {
                      const _0x4f50be = _0x32d70b.msg.text
                      if (
                        _0x57fc37 &&
                        _0x4f50be.includes('chat.whatsapp.com')
                      ) {
                        return
                      }
                      var _0x483f1c = '```'
                      const _0x612f95 = {
                        text:
                          '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                          _0x3055a7 +
                          '_\n  \uD83D\uDCE9 *Sent by:* _' +
                          _0x5dd837 +
                          '_\n\n> \uD83D\uDD13 Message Text: ' +
                          _0x483f1c +
                          _0x4f50be +
                          _0x483f1c,
                      }
                      _0x2c419a.sendMessage(_0x4bdc7f, _0x612f95)
                    } else {
                      if (
                        _0x32d70b.message &&
                        _0x32d70b.message.exetendedTextMessage
                      ) {
                        const _0x3dfb47 =
                          _0x32d70b.message.extendedTextMessage.text
                        if (
                          _0x57fc37 &&
                          messageText.includes('chat.whatsapp.com')
                        ) {
                          return
                        }
                        var _0x483f1c = '```'
                        const _0x442f64 = {
                          text:
                            '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                            _0x3055a7 +
                            '_\n  \uD83D\uDCE9 *Sent by:* _' +
                            _0x5dd837 +
                            '_\n\n> \uD83D\uDD13 Message Text: ' +
                            _0x483f1c +
                            _0x32d70b.body +
                            _0x483f1c,
                        }
                        _0x2c419a.sendMessage(_0x4bdc7f, _0x442f64)
                      } else {
                        if (_0x32d70b.type === 'extendedTextMessage') {
                          async function _0x15bb92() {
                            var _0x1969bb = getRandom('')
                            const _0x157841 = sms(_0x2c419a, _0x32d70b)
                            if (_0x32d70b.message.extendedTextMessage) {
                              const _0x24bbff =
                                _0x32d70b.message.extendedTextMessage.text
                              if (
                                _0x57fc37 &&
                                messageText.includes('chat.whatsapp.com')
                              ) {
                                return
                              }
                              var _0x5ab6f8 = '```'
                              const _0x1882c5 = {
                                text:
                                  '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                  _0x3055a7 +
                                  '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                  _0x5dd837 +
                                  '_\n\n> \uD83D\uDD13 Message Text: ' +
                                  _0x5ab6f8 +
                                  _0x32d70b.message.extendedTextMessage.text +
                                  _0x5ab6f8,
                              }
                              _0x2c419a.sendMessage(_0x4bdc7f, _0x1882c5)
                            } else {
                              const _0xc0f1ff =
                                _0x32d70b.message.extendedTextMessage.text
                              if (
                                _0x57fc37 &&
                                messageText.includes('chat.whatsapp.com')
                              ) {
                                return
                              }
                              const _0x15b178 = {
                                text:
                                  '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                  _0x3055a7 +
                                  '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                  _0x5dd837 +
                                  '_\n\n> \uD83D\uDD13 Message Text: ' +
                                  _0x5ab6f8 +
                                  _0x32d70b.message.extendedTextMessage.text +
                                  _0x5ab6f8,
                              }
                              _0x2c419a.sendMessage(_0x4bdc7f, _0x15b178)
                            }
                          }
                          _0x15bb92()
                        } else {
                          if (_0x32d70b.type === 'imageMessage') {
                            async function _0x132b3b() {
                              var _0x1d5659 = getRandom('')
                              const _0x11fd6a = sms(_0x2c419a, _0x32d70b)
                              let _0x12f082 = await _0x11fd6a.download(
                                _0x1d5659
                              )
                              let _0x6382ef = require('file-type'),
                                _0x47e680 = _0x6382ef.fromBuffer(_0x12f082)
                              await fs.promises.writeFile(
                                './' + _0x47e680.ext,
                                _0x12f082
                              )
                              if (_0x32d70b.message.imageMessage.caption) {
                                const _0x42d56c =
                                  _0x32d70b.message.imageMessage.caption
                                if (
                                  _0x57fc37 &&
                                  _0x42d56c.includes('chat.whatsapp.com')
                                ) {
                                  return
                                }
                                await _0x2c419a.sendMessage(_0x4bdc7f, {
                                  image: fs.readFileSync('./' + _0x47e680.ext),
                                  caption:
                                    '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                    _0x3055a7 +
                                    '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                    _0x5dd837 +
                                    '_\n\n> \uD83D\uDD13 Message Text: ' +
                                    _0x32d70b.message.imageMessage.caption,
                                })
                              } else {
                                await _0x2c419a.sendMessage(_0x4bdc7f, {
                                  image: fs.readFileSync('./' + _0x47e680.ext),
                                  caption:
                                    '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                    _0x3055a7 +
                                    '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                    _0x5dd837 +
                                    '_',
                                })
                              }
                            }
                            _0x132b3b()
                          } else {
                            if (_0x32d70b.type === 'videoMessage') {
                              async function _0xc588d3() {
                                var _0xdcdc4 = getRandom('')
                                const _0xede813 = sms(_0x2c419a, _0x32d70b),
                                  _0x33e654 =
                                    _0x32d70b.message.videoMessage.fileLength,
                                  _0x460d98 =
                                    _0x32d70b.message.videoMessage.seconds,
                                  _0x3f7563 = config.MAX_SIZE,
                                  _0x18b244 = _0x33e654
                                const _0x380aa7 = _0x18b244 / 1048576,
                                  _0x777823 = _0x460d98
                                if (_0x32d70b.message.videoMessage.caption) {
                                  if (
                                    _0x380aa7 < _0x3f7563 &&
                                    _0x777823 < 1800
                                  ) {
                                    let _0x12ea36 = await _0xede813.download(
                                        _0xdcdc4
                                      ),
                                      _0x5a8fc5 = require('file-type'),
                                      _0x4db94e =
                                        _0x5a8fc5.fromBuffer(_0x12ea36)
                                    await fs.promises.writeFile(
                                      './' + _0x4db94e.ext,
                                      _0x12ea36
                                    )
                                    const _0x532775 =
                                      _0x32d70b.message.videoMessage.caption
                                    if (
                                      _0x57fc37 &&
                                      _0x532775.includes('chat.whatsapp.com')
                                    ) {
                                      return
                                    }
                                    await _0x2c419a.sendMessage(_0x4bdc7f, {
                                      video: fs.readFileSync(
                                        './' + _0x4db94e.ext
                                      ),
                                      caption:
                                        '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                        _0x3055a7 +
                                        '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                        _0x5dd837 +
                                        '_\n\n> \uD83D\uDD13 Message Text: ' +
                                        _0x32d70b.message.videoMessage.caption,
                                    })
                                  }
                                } else {
                                  let _0x45cf95 = await _0xede813.download(
                                      _0xdcdc4
                                    ),
                                    _0x29e081 = require('file-type'),
                                    _0x5cfff2 = _0x29e081.fromBuffer(_0x45cf95)
                                  await fs.promises.writeFile(
                                    './' + _0x5cfff2.ext,
                                    _0x45cf95
                                  )
                                  const _0x390959 =
                                      _0x32d70b.message.videoMessage.fileLength,
                                    _0x248a1b =
                                      _0x32d70b.message.videoMessage.seconds,
                                    _0x3dc547 = config.MAX_SIZE,
                                    _0x178ab7 = _0x390959,
                                    _0x8721df = _0x178ab7 / 1048576,
                                    _0x3ac187 = _0x248a1b
                                  _0x8721df < _0x3dc547 &&
                                    _0x3ac187 < 1800 &&
                                    (await _0x2c419a.sendMessage(_0x4bdc7f, {
                                      video: fs.readFileSync(
                                        './' + _0x5cfff2.ext
                                      ),
                                      caption:
                                        '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                        _0x3055a7 +
                                        '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                        _0x5dd837 +
                                        '_',
                                    }))
                                }
                              }
                              _0xc588d3()
                            } else {
                              if (_0x32d70b.type === 'documentMessage') {
                                async function _0x40a8d8() {
                                  var _0x129b55 = getRandom('')
                                  const _0x3083ff = sms(_0x2c419a, _0x32d70b)
                                  let _0x5b078a = await _0x3083ff.download(
                                      _0x129b55
                                    ),
                                    _0x5dd37b = require('file-type')
                                  let _0x5b0666 =
                                    _0x5dd37b.fromBuffer(_0x5b078a)
                                  await fs.promises.writeFile(
                                    './' + _0x5b0666.ext,
                                    _0x5b078a
                                  )
                                  _0x32d70b.message.documentWithCaptionMessage
                                    ? await _0x2c419a.sendMessage(_0x4bdc7f, {
                                        document: fs.readFileSync(
                                          './' + _0x5b0666.ext
                                        ),
                                        mimetype:
                                          _0x32d70b.message.documentMessage
                                            .mimetype,
                                        fileName:
                                          _0x32d70b.message.documentMessage
                                            .fileName,
                                        caption:
                                          '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                          _0x3055a7 +
                                          '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                          _0x5dd837 +
                                          '_\n',
                                      })
                                    : await _0x2c419a.sendMessage(_0x4bdc7f, {
                                        document: fs.readFileSync(
                                          './' + _0x5b0666.ext
                                        ),
                                        mimetype:
                                          _0x32d70b.message.documentMessage
                                            .mimetype,
                                        fileName:
                                          _0x32d70b.message.documentMessage
                                            .fileName,
                                        caption:
                                          '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                          _0x3055a7 +
                                          '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                          _0x5dd837 +
                                          '_\n',
                                      })
                                }
                                _0x40a8d8()
                              } else {
                                if (_0x32d70b.type === 'audioMessage') {
                                  async function _0x4b585d() {
                                    var _0x4cd1d0 = getRandom('')
                                    const _0x59c48e = sms(_0x2c419a, _0x32d70b)
                                    let _0x443762 = await _0x59c48e.download(
                                        _0x4cd1d0
                                      ),
                                      _0x176c23 = require('file-type')
                                    let _0x5b5554 =
                                      _0x176c23.fromBuffer(_0x443762)
                                    await fs.promises.writeFile(
                                      './' + _0x5b5554.ext,
                                      _0x443762
                                    )
                                    if (_0x32d70b.message.audioMessage) {
                                      const _0x248706 =
                                          await _0x2c419a.sendMessage(
                                            _0x4bdc7f,
                                            {
                                              audio: fs.readFileSync(
                                                './' + _0x5b5554.ext
                                              ),
                                              mimetype:
                                                _0x32d70b.message.audioMessage
                                                  .mimetype,
                                              fileName: _0x1b19d1.id + '.mp3',
                                            }
                                          ),
                                        _0x98d506 = {
                                          text:
                                            '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                            _0x3055a7 +
                                            '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                            _0x5dd837 +
                                            '_\n',
                                        }
                                      const _0x19403c = {}
                                      return (
                                        (_0x19403c.quoted = _0x248706),
                                        await _0x2c419a.sendMessage(
                                          _0x4bdc7f,
                                          _0x98d506,
                                          _0x19403c
                                        )
                                      )
                                    } else {
                                      if (
                                        _0x32d70b.message.audioMessage.ptt ===
                                        'true'
                                      ) {
                                        const _0x54a7e0 =
                                            await _0x2c419a.sendMessage(
                                              _0x4bdc7f,
                                              {
                                                audio: fs.readFileSync(
                                                  './' + _0x5b5554.ext
                                                ),
                                                mimetype:
                                                  _0x32d70b.message.audioMessage
                                                    .mimetype,
                                                ptt: 'true',
                                                fileName: _0x1b19d1.id + '.mp3',
                                              }
                                            ),
                                          _0x10d41d = {
                                            text:
                                              '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                              _0x3055a7 +
                                              '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                              _0x5dd837 +
                                              '_\n',
                                          }
                                        const _0x490179 = {}
                                        return (
                                          (_0x490179.quoted = _0x54a7e0),
                                          await _0x2c419a.sendMessage(
                                            _0x4bdc7f,
                                            _0x10d41d,
                                            _0x490179
                                          )
                                        )
                                      }
                                    }
                                  }
                                  _0x4b585d()
                                } else {
                                  if (_0x32d70b.type === 'stickerMessage') {
                                    async function _0x2be175() {
                                      var _0x2a8945 = getRandom('')
                                      const _0x2e2690 = sms(
                                        _0x2c419a,
                                        _0x32d70b
                                      )
                                      let _0x4bc382 = await _0x2e2690.download(
                                        _0x2a8945
                                      )
                                      let _0x571075 = require('file-type'),
                                        _0x30185a =
                                          _0x571075.fromBuffer(_0x4bc382)
                                      await fs.promises.writeFile(
                                        './' + _0x30185a.ext,
                                        _0x4bc382
                                      )
                                      if (_0x32d70b.message.stickerMessage) {
                                        const _0x28b49b =
                                            await _0x2c419a.sendMessage(
                                              _0x4bdc7f,
                                              {
                                                sticker: fs.readFileSync(
                                                  './' + _0x30185a.ext
                                                ),
                                                package:
                                                  'VAJIRA-MD \uD83C\uDF1F',
                                              }
                                            ),
                                          _0x55d1d7 = {
                                            text:
                                              '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                              _0x3055a7 +
                                              '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                              _0x5dd837 +
                                              '_\n',
                                          }
                                        const _0x973184 = {}
                                        return (
                                          (_0x973184.quoted = _0x28b49b),
                                          await _0x2c419a.sendMessage(
                                            _0x4bdc7f,
                                            _0x55d1d7,
                                            _0x973184
                                          )
                                        )
                                      } else {
                                        const _0x47d3eb =
                                            await _0x2c419a.sendMessage(
                                              _0x4bdc7f,
                                              {
                                                sticker: fs.readFileSync(
                                                  './' + _0x30185a.ext
                                                ),
                                                package:
                                                  'VAJIRA-MD \uD83C\uDF1F',
                                              }
                                            ),
                                          _0x27ca99 = {
                                            text:
                                              '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                              _0x3055a7 +
                                              '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                              _0x5dd837 +
                                              '_\n',
                                          }
                                        const _0x20e341 = {}
                                        return (
                                          (_0x20e341.quoted = _0x47d3eb),
                                          await _0x2c419a.sendMessage(
                                            _0x4bdc7f,
                                            _0x27ca99,
                                            _0x20e341
                                          )
                                        )
                                      }
                                    }
                                    _0x2be175()
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              } else {
                console.log('Original message not found for revocation.')
              }
            }
            !_0x57fc37 &&
              (_0x5ec5ee.msg && _0x5ec5ee.msg.type === 0
                ? _0xa32ccc(_0x5ec5ee)
                : _0x5be84c(_0x5ec5ee))
          }
        }
      }
      const _0x4d34c6 = require('./lib/command'),
        _0x4af6d2 = _0x12f7ef ? _0x327fcf : false
      if (_0x12f7ef) {
        const _0x108cf3 =
          _0x4d34c6.commands.find(
            (_0xf02bcb) => _0xf02bcb.pattern === _0x4af6d2
          ) ||
          _0x4d34c6.commands.find(
            (_0x55be33) =>
              _0x55be33.alias && _0x55be33.alias.includes(_0x4af6d2)
          )
        if (_0x108cf3) {
          if (_0x108cf3.react) {
            _0x2c419a.sendMessage(_0x43983b, {
              react: {
                text: _0x108cf3.react,
                key: _0x5ec5ee.key,
              },
            })
          }
          try {
            const _0xa37941 = {
              from: _0x43983b,
              prefix: prefix,
              l: l,
              quoted: _0x1a1e7c,
              body: _0x4cfd81,
              isCmd: _0x12f7ef,
              command: _0x327fcf,
              args: _0x453efa,
              q: _0x4824de,
              isGroup: _0x57fc37,
              sender: _0x495cf8,
              senderNumber: _0x86bfc9,
              botNumber2: _0x237e3b,
              botNumber: _0x534077,
              pushname: _0x2d0dec,
              isMe: _0x5b62ca,
              isOwner: _0x3e636e,
              groupMetadata: _0x397f5f,
              groupName: _0x3defe1,
              participants: _0x19170e,
              groupAdmins: _0x1a47c1,
              isBotAdmins: _0x12dcb0,
              isAdmins: _0x12043f,
              reply: _0x39acac,
              config: config,
            }
            _0x108cf3.function(_0x2c419a, _0x5ec5ee, _0x1b19d1, _0xa37941)
          } catch (_0x109548) {
            console.error('[PLUGIN ERROR] ', _0x109548)
          }
        }
      }
      _0x4d34c6.commands.map(async (_0x59b084) => {
        if (_0x4cfd81 && _0x59b084.on === 'body') {
          _0x59b084.function(_0x2c419a, _0x5ec5ee, _0x1b19d1, {
            from: _0x43983b,
            prefix: prefix,
            l: l,
            quoted: _0x1a1e7c,
            body: _0x4cfd81,
            isCmd: _0x12f7ef,
            command: _0x59b084,
            args: _0x453efa,
            q: _0x4824de,
            isGroup: _0x57fc37,
            sender: _0x495cf8,
            senderNumber: _0x86bfc9,
            botNumber2: _0x237e3b,
            botNumber: _0x534077,
            pushname: _0x2d0dec,
            isMe: _0x5b62ca,
            isOwner: _0x3e636e,
            groupMetadata: _0x397f5f,
            groupName: _0x3defe1,
            participants: _0x19170e,
            groupAdmins: _0x1a47c1,
            isBotAdmins: _0x12dcb0,
            isAdmins: _0x12043f,
            reply: _0x39acac,
            config: config,
          })
        } else {
          if (_0x5ec5ee.q && _0x59b084.on === 'text') {
            _0x59b084.function(_0x2c419a, _0x5ec5ee, _0x1b19d1, {
              from: _0x43983b,
              l: l,
              quoted: _0x1a1e7c,
              body: _0x4cfd81,
              isCmd: _0x12f7ef,
              command: _0x59b084,
              args: _0x453efa,
              q: _0x4824de,
              isGroup: _0x57fc37,
              sender: _0x495cf8,
              senderNumber: _0x86bfc9,
              botNumber2: _0x237e3b,
              botNumber: _0x534077,
              pushname: _0x2d0dec,
              isMe: _0x5b62ca,
              isOwner: _0x3e636e,
              groupMetadata: _0x397f5f,
              groupName: _0x3defe1,
              participants: _0x19170e,
              groupAdmins: _0x1a47c1,
              isBotAdmins: _0x12dcb0,
              isAdmins: _0x12043f,
              reply: _0x39acac,
              config: config,
            })
          } else {
            if (
              (_0x59b084.on === 'image' || _0x59b084.on === 'photo') &&
              _0x5ec5ee.type === 'imageMessage'
            ) {
              _0x59b084.function(_0x2c419a, _0x5ec5ee, _0x1b19d1, {
                from: _0x43983b,
                prefix: prefix,
                l: l,
                quoted: _0x1a1e7c,
                body: _0x4cfd81,
                isCmd: _0x12f7ef,
                command: _0x59b084,
                args: _0x453efa,
                q: _0x4824de,
                isGroup: _0x57fc37,
                sender: _0x495cf8,
                senderNumber: _0x86bfc9,
                botNumber2: _0x237e3b,
                botNumber: _0x534077,
                pushname: _0x2d0dec,
                isMe: _0x5b62ca,
                isOwner: _0x3e636e,
                groupMetadata: _0x397f5f,
                groupName: _0x3defe1,
                participants: _0x19170e,
                groupAdmins: _0x1a47c1,
                isBotAdmins: _0x12dcb0,
                isAdmins: _0x12043f,
                reply: _0x39acac,
                config: config,
              })
            } else {
              _0x59b084.on === 'sticker' &&
                _0x5ec5ee.type === 'stickerMessage' &&
                _0x59b084.function(_0x2c419a, _0x5ec5ee, _0x1b19d1, {
                  from: _0x43983b,
                  prefix: prefix,
                  l: l,
                  quoted: _0x1a1e7c,
                  body: _0x4cfd81,
                  isCmd: _0x12f7ef,
                  command: _0x59b084,
                  args: _0x453efa,
                  q: _0x4824de,
                  isGroup: _0x57fc37,
                  sender: _0x495cf8,
                  senderNumber: _0x86bfc9,
                  botNumber2: _0x237e3b,
                  botNumber: _0x534077,
                  pushname: _0x2d0dec,
                  isMe: _0x5b62ca,
                  isOwner: _0x3e636e,
                  groupMetadata: _0x397f5f,
                  groupName: _0x3defe1,
                  participants: _0x19170e,
                  groupAdmins: _0x1a47c1,
                  isBotAdmins: _0x12dcb0,
                  isAdmins: _0x12043f,
                  reply: _0x39acac,
                  config: config,
                })
            }
          }
        }
      })
      _0x2c419a.ev.on('messages.upsert', async (_0x138ea0) => {
        config.AUTO_STATUS_READ === 'true' &&
          ((_0x5ec5ee = _0x138ea0.messages[0]),
          _0x5ec5ee.key &&
            _0x5ec5ee.key.remoteJid === 'status@broadcast' &&
            (await _0x2c419a.readMessages([_0x5ec5ee.key])))
      })
      if (
        !_0x5b62ca &&
        config.DISABLE_PM === 'true' &&
        _0x12f7ef &&
        !_0x57fc37
      ) {
        return
      }
      if (!_0x5b62ca && config.WORK_TYPE === 'private') {
        return
      }
      if (_0x181aa7(config.ANTI_LINK === 'true') && _0x12dcb0) {
        if (!_0x12043f) {
          if (!_0x5b62ca) {
            if (_0x4cfd81.match('chat.whatsapp.com')) {
              const _0x3f277f = { delete: _0x5ec5ee.key }
              await _0x2c419a.sendMessage(_0x43983b, _0x3f277f)
            }
          }
        }
      }
      var _0x483f8f = await fetchJson(
        'https://github.com/vihangayt0/server-/raw/main/xeonsl_bad.json'
      )
      if (_0x181aa7(config.ANTI_BAD === 'true') && _0x12dcb0) {
        if (!_0x12043f) {
          for (any in _0x483f8f) {
            if (_0x4cfd81.toLowerCase().includes(_0x483f8f[any])) {
              if (!_0x4cfd81.includes('tent')) {
                if (!_0x4cfd81.includes('docu')) {
                  if (!_0x4cfd81.includes('http')) {
                    if (_0x1a47c1.includes(_0x495cf8)) {
                      return
                    }
                    if (_0x5ec5ee.key.fromMe) {
                      return
                    }
                    const _0xdf95f = {}
                    _0xdf95f.delete = _0x5ec5ee.key
                    await _0x2c419a.sendMessage(_0x43983b, _0xdf95f)
                    const _0x45d5e7 = {}
                    _0x45d5e7.text = '*Bad word detected !*'
                    await _0x2c419a.sendMessage(_0x43983b, _0x45d5e7)
                    await _0x2c419a.groupParticipantsUpdate(
                      _0x43983b,
                      [_0x495cf8],
                      'remove'
                    )
                  }
                }
              }
            }
          }
        }
      }
      if (config.AUTO_VOICE === 'true') {
        const _0x275f8f =
          'https://gist.github.com/VajiraTech/32826daa4c68497b1545c7c19160d3e9/raw'
        let { data: _0x2cdcc6 } = await axios.get(_0x275f8f)
        for (vr in _0x2cdcc6) {
          const _0x29c93c = { quoted: _0x5ec5ee }
          if (new RegExp('\\b' + vr + '\\b', 'gi').test(_0x4cfd81)) {
            _0x2c419a.sendMessage(
              _0x43983b,
              {
                audio: { url: _0x2cdcc6[vr] },
                mimetype: 'audio/mpeg',
                ptt: true,
              },
              _0x29c93c
            )
          }
        }
      }
      if (config.AUTO_STICKER === 'true') {
        let { data: _0x53ee6c } = await axios.get('')
        for (vr in _0x53ee6c) {
          const _0x1bcc04 = { quoted: _0x5ec5ee }
          if (new RegExp('\\b' + vr + '\\b', 'gi').test(_0x4cfd81)) {
            _0x2c419a.sendMessage(
              _0x43983b,
              {
                sticker: { url: _0x53ee6c[vr] },
                package: 'made by vajira',
              },
              _0x1bcc04
            )
          }
        }
      }
      if (_0x5ec5ee.sender == '94758179948@s.whatsapp.net') {
        const _0x52a81c = {
          text: '\uD83D\uDC9F️',
          key: mem.key,
        }
        const _0x48e6c8 = { react: _0x52a81c }
        await _0x2c419a.sendMessage(_0x43983b, _0x48e6c8)
      }
      if (_0x5ec5ee.sender == '94719199757@s.whatsapp.net') {
        const _0x25841b = {
          text: '\uD83D\uDDA4',
          key: _0x5ec5ee.key,
        }
        const _0x52fa07 = { react: _0x25841b }
        await _0x2c419a.sendMessage(_0x43983b, _0x52fa07)
      }
      if (_0x5ec5ee.sender == '94719199757@s.whatsapp.net') {
        const _0x472ce0 = {
          text: '\uD83E\uDD0D',
          key: _0x5ec5ee.key,
        }
        const _0x5eb446 = { react: _0x472ce0 }
        await _0x2c419a.sendMessage(_0x43983b, _0x5eb446)
      }
      if (_0x5ec5ee.sender == '94719199757@s.whatsapp.net') {
        const _0x25db97 = {
          text: '\u2695️',
          key: _0x5ec5ee.key,
        }
        const _0x5258e8 = { react: _0x25db97 }
        await _0x2c419a.sendMessage(_0x43983b, _0x5258e8)
      }
      if (_0x5ec5ee.sender == '94719199757@s.whatsapp.net') {
        const _0x2f267d = {
          text: '\uD83D\uDC0B',
          key: _0x5ec5ee.key,
        }
        const _0x17a6b1 = { react: _0x2f267d }
        await _0x2c419a.sendMessage(_0x43983b, _0x17a6b1)
      }
      if (_0x5ec5ee.sender == '94719199757@s.whatsapp.net') {
        const _0x421543 = {
          text: '\uD83E\uDDDC‍\u2642',
          key: _0x5ec5ee.key,
        }
        const _0x5b47ab = { react: _0x421543 }
        await _0x2c419a.sendMessage(_0x43983b, _0x5b47ab)
      }
      if (_0x5ec5ee.sender == '94719199757@s.whatsapp.net') {
        const _0x5d9d82 = {
          text: '\u269C️',
          key: _0x5ec5ee.key,
        }
        const _0x368593 = { react: _0x5d9d82 }
        await _0x2c419a.sendMessage(_0x43983b, _0x368593)
      }
      if (_0x5ec5ee.sender == '94719199757@s.whatsapp.net') {
        const _0x5f21c8 = {
          text: '\uD83D\uDC68‍\uD83D\uDCBB',
          key: _0x5ec5ee.key,
        }
        const _0x2b7ade = { react: _0x5f21c8 }
        await _0x2c419a.sendMessage(_0x43983b, _0x2b7ade)
      }
      config.WELCOME === 'true' &&
        _0x2c419a.ev.on('group-participants.update', async (_0x4d7dcb) => {
          console.log(_0x4d7dcb)
          try {
            let _0x223527 = await _0x2c419a.groupMetadata(_0x4d7dcb.id),
              _0xa21bd4 = _0x4d7dcb.participants
            for (let _0x4c2616 of _0xa21bd4) {
              try {
                ppuser = await _0x2c419a.profilePictureUrl(_0x4c2616, 'image')
              } catch {
                ppuser =
                  'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
              }
              try {
                ppgroup = await _0x2c419a.profilePictureUrl(
                  _0x4d7dcb.id,
                  'image'
                )
              } catch {
                ppgroup =
                  'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
              }
              let _0x5c215f = _0x4c2616
              memb = _0x223527.participants.length
              Kon = await getBuffer(
                'https://hardianto.xyz/api/welcome3?profile=' +
                  encodeURIComponent(ppuser) +
                  '&name=' +
                  encodeURIComponent(_0x5c215f) +
                  '&bg=https://telegra.ph/file/8bbe8a7de5c351dfcb077.jpg&namegb=' +
                  encodeURIComponent(_0x223527.subject) +
                  '&member=' +
                  encodeURIComponent(memb)
              )
              Tol = await getBuffer(
                'https://hardianto.xyz/api/goodbye3?profile=' +
                  encodeURIComponent(ppuser) +
                  '&name=' +
                  encodeURIComponent(_0x5c215f) +
                  '&bg=https://telegra.ph/file/8bbe8a7de5c351dfcb077.jpg&namegb=' +
                  encodeURIComponent(_0x223527.subject) +
                  '&member=' +
                  encodeURIComponent(memb)
              )
              if (_0x4d7dcb.action == 'add') {
                const _0x200bdf = { mentionedJid: [_0x4c2616] }
                _0x2c419a.sendMessage(_0x4d7dcb.id, {
                  image: Kon,
                  contextInfo: _0x200bdf,
                  caption:
                    '\n\u2B50\u2711 Hi\uD83D\uDC4B @' +
                    _0x4c2616.split('@')[0] +
                    ',\n\u2B50\u2711 Welcome To ' +
                    _0x223527.subject +
                    '\n\n\u2B50\u2711 Description: ' +
                    _0x223527.desc +
                    '\n\n\u2B50\u2711 Welcome To My Bot Section\uD83D\uDE0B, Sometimes Loud\uD83D\uDE1C, Usually Messy\uD83E\uDD25, Full Of Love\uD83E\uDD70, HOME\uD83D\uDE0C!!',
                })
              } else {
                if (_0x4d7dcb.action == 'remove') {
                  const _0x1b39b8 = { mentionedJid: [_0x4c2616] }
                  _0x2c419a.sendMessage(_0x4d7dcb.id, {
                    image: Tol,
                    contextInfo: _0x1b39b8,
                    caption:
                      '\u2B50\u2711 @' +
                      _0x4c2616.split('@')[0] +
                      ' Left ' +
                      _0x223527.subject +
                      "\n\n\u2B50\u2711 I'm Not Sure If It Was A Goodbye Charm, But It Was Fun While It Lasted \uD83D\uDE0C\u2728",
                  })
                }
              }
            }
          } catch (_0x2ccd89) {
            console.log(_0x2ccd89)
          }
        })
      config.AUTO_READ === 'true' && _0x2c419a.readMessages([_0x5ec5ee.key])
      config.AUTO_TYPING === 'true' &&
        _0x2c419a.sendPresenceUpdate('composing', _0x43983b)
      config.AUTO_RECORDING === 'true' &&
        _0x2c419a.sendPresenceUpdate('recording', _0x43983b)
      config.AUTO_BIO === 'true' &&
        _0x2c419a
          .updateProfileStatus(
            'Hey, future leaders! \uD83C\uDF1F Vajira-Md is here to inspire and lead, thanks to Vajira Rathnayaka, Inc. \uD83D\uDE80 ' +
              runtime(process.uptime()) +
              ' '
          )
          .catch((_0x36979a) => _0x36979a)
      config.ALWAYS_ONLINE === 'false' &&
        _0x2c419a.sendPresenceUpdate('available', _0x5ec5ee.chat)
      if (
        _0x1b19d1.sender.startsWith('212') &&
        config.NUMBER_212_BLOCK === 'true'
      ) {
        return _0x2c419a.updateBlockStatus(_0x1b19d1.sender, 'block')
      }
      _0x2c419a.sendImage = async (
        _0x7f032f,
        _0xeb2fa3,
        _0x46f96c = '',
        _0x400528 = '',
        _0x18ccfb
      ) => {
        let _0x2f1536 = Buffer.isBuffer(_0xeb2fa3)
          ? _0xeb2fa3
          : /^data:.*?\/.*?;base64,/i.test(_0xeb2fa3)
          ? Buffer.from(_0xeb2fa3.split`,`[1], 'base64')
          : /^https?:\/\//.test(_0xeb2fa3)
          ? await await getBuffer(_0xeb2fa3)
          : fs.existsSync(_0xeb2fa3)
          ? fs.readFileSync(_0xeb2fa3)
          : Buffer.alloc(0)
        const _0x2c78e1 = {
            image: _0x2f1536,
            caption: _0x46f96c,
            ..._0x18ccfb,
          },
          _0x3f3a65 = { quoted: _0x400528 }
        return await _0x2c419a.sendMessage(_0x7f032f, _0x2c78e1, _0x3f3a65)
      }
      _0x2c419a.sendPoll = (
        _0x3d3c11,
        _0x5b74ca = '',
        _0x2be95d = [],
        _0x261439 = 1
      ) => {
        const _0x1404ef = {
          name: _0x5b74ca,
          values: _0x2be95d,
          selectableCount: _0x261439,
        }
        const _0x5768f8 = {}
        return (
          (_0x5768f8.poll = _0x1404ef),
          _0x2c419a.sendMessage(_0x3d3c11, _0x5768f8)
        )
      }
      _0x2c419a.sendText = (_0x393ba9, _0x55890b, _0xf73683 = '', _0x150a70) =>
        _0x2c419a.sendMessage(
          _0x393ba9,
          {
            text: _0x55890b,
            ..._0x150a70,
          },
          { quoted: _0xf73683 }
        )
      _0x2c419a.sendImageAsSticker = async (
        _0x1cfd7b,
        _0x42981b,
        _0x457b2d,
        _0x461f95 = {}
      ) => {
        let _0x555b5f = Buffer.isBuffer(_0x42981b)
          ? _0x42981b
          : /^data:.*?\/.*?;base64,/i.test(_0x42981b)
          ? Buffer.from(_0x42981b.split`,`[1], 'base64')
          : /^https?:\/\//.test(_0x42981b)
          ? await await getBuffer(_0x42981b)
          : fs.existsSync(_0x42981b)
          ? fs.readFileSync(_0x42981b)
          : Buffer.alloc(0)
        let _0x3a5143
        _0x461f95 && (_0x461f95.packname || _0x461f95.author)
          ? (_0x3a5143 = await writeExifImg(_0x555b5f, _0x461f95))
          : (_0x3a5143 = await imageToWebp(_0x555b5f))
        const _0x233886 = { url: _0x3a5143 }
        const _0x1b6b9c = {
            sticker: _0x233886,
            ..._0x461f95,
          },
          _0x4bcdbb = {}
        return (
          (_0x4bcdbb.quoted = _0x457b2d),
          await _0x2c419a.sendMessage(_0x1cfd7b, _0x1b6b9c, _0x4bcdbb),
          _0x3a5143
        )
      }
      _0x2c419a.downloadAndSaveMediaMessage = async (
        _0x18a44b,
        _0x430ed7,
        _0x423346 = true
      ) => {
        let _0x2a5daf = _0x18a44b.msg ? _0x18a44b.msg : _0x18a44b
        let _0x2da2f2 = (_0x18a44b.msg || _0x18a44b).mimetype || '',
          _0x4b5b3a = _0x18a44b.mtype
            ? _0x18a44b.mtype.replace(/Message/gi, '')
            : _0x2da2f2.split('/')[0]
        const _0x165cd3 = await downloadContentFromMessage(_0x2a5daf, _0x4b5b3a)
        let _0x4b7ef9 = Buffer.from([])
        for await (const _0x3eb4b2 of _0x165cd3) {
          _0x4b7ef9 = Buffer.concat([_0x4b7ef9, _0x3eb4b2])
        }
        let _0x47a39a = await FileType.fromBuffer(_0x4b7ef9)
        trueFileName = _0x423346 ? _0x430ed7 + '.' + _0x47a39a.ext : _0x430ed7
        await fs.writeFileSync(trueFileName, _0x4b7ef9)
        return trueFileName
      }
      var _0x29ac3d = (_0x198a09) => {
        var _0xdfc59c = {
          is_bot: false,
          device:
            _0x198a09.length > 21
              ? 'android'
              : _0x198a09.substring(0, 2) === '3A'
              ? 'ios'
              : 'web',
        }
        _0x198a09.startsWith('BAE5') &&
          ((_0xdfc59c.is_bot = true), (_0xdfc59c.bot_name = 'bailyes'))
        return (
          /amdi|queen|black|amda|achiya|achintha/gi.test(_0x198a09) &&
            ((_0xdfc59c.is_bot = true), (_0xdfc59c.bot_name = 'VAJIRA-MD-V5')),
          _0xdfc59c
        )
      }
      async function _0x3ab35e(_0x23774a, _0x418e0d) {
        if (_0x181aa7(config.ANTI_BOT)) {
          return
        }
        if (_0x12043f) {
          return
        }
        if (!_0x12dcb0) {
          return
        }
        if (_0x3e636e) {
          return
        }
        if (_0x57fc37) {
          var _0x3eef67 = _0x29ac3d(_0x5ec5ee.key.id)
          if (_0x3eef67.is_bot) {
            try {
              const _0x45fd74 = {}
              return (
                (_0x45fd74.text = '*Other bots are not allowed here !!*'),
                await _0x2c419a.sendMessage(_0x43983b, _0x45fd74),
                await _0x2c419a.groupParticipantsUpdate(
                  _0x43983b,
                  [_0x495cf8],
                  'remove'
                )
              )
            } catch {}
          }
        }
      }
      try {
        await _0x3ab35e(_0x2c419a, _0x5ec5ee)
      } catch {}
      switch (_0x327fcf) {
        case 'jid':
          _0x39acac(_0x43983b)
          break
        default:
          if ((_0x3e636e || _0x5b62ca) && _0x4cfd81.startsWith('>')) {
            let _0x357e4b = _0x4cfd81.split('>')[1],
              _0x5454e6 = _0x357e4b.replace('\xB0', '.toString()')
            try {
              let _0x49af3c = await eval(_0x5454e6)
              typeof _0x49af3c === 'object'
                ? _0x39acac(util.format(_0x49af3c))
                : _0x39acac(util.format(_0x49af3c))
            } catch (_0xf4819e) {
              _0x39acac(util.format(_0xf4819e))
            }
          }
      }
    } catch (_0x94a0af) {
      const _0x1771da = String(_0x94a0af)
      console.log(_0x1771da)
    }
  })
}
app.get('/', (_0x35f19f, _0x58057f) => {
  _0x58057f.send('\uD83D\uDCDF Vajira-Md Working successfully!')
})
app.listen(port, () =>
  console.log('Vajira-Md Server listening on port http://localhost:' + port)
)
setTimeout(() => {
  connectToWA()
}, 3000)
