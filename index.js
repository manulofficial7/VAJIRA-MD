(function (_0x1ee4a6, _0x3201a7) {
  const _0x39b7ed = _0x1ee4a6();
  while (true) {
    try {
      const _0x9bbbbb = parseInt(_0x5e79(2418, '@N8t')) / 1 + parseInt(_0x5e79(1304, ')Aia')) / 2 * (-parseInt(_0x5e79(742, 'P^bj')) / 3) + parseInt(_0x5e79(2210, '!4Mt')) / 4 * (-parseInt(_0x5e79(4709, 'ACfR')) / 5) + parseInt(_0x5e79(1166, 'C90@')) / 6 + parseInt(_0x5e79(1751, 'oHkV')) / 7 + parseInt(_0x5e79(2737, 'Q2]x')) / 8 + -parseInt(_0x5e79(1405, '&Lhl')) / 9;
      if (_0x9bbbbb === _0x3201a7) {
        break;
      } else {
        _0x39b7ed.push(_0x39b7ed.shift());
      }
    } catch (_0x264321) {
      _0x39b7ed.push(_0x39b7ed.shift());
    }
  }
})(_0x8de2, 487765);
const fs = require('fs');
const P = require("pino");
const FileType = require("file-type");
const l = console.log;
var config = require("./settings");
const NodeCache = require("node-cache");
function _0x40a5e0(_0x4f9ed7, _0x3c173d, _0x4067a3, _0x293bc7, _0x3adb62) {
  return _0x5e79(_0x3c173d + 0x4b, _0x4f9ed7);
}
function _0x5e79(_0x27ba5b, _0x3691a3) {
  const _0x56414c = _0x8de2();
  _0x5e79 = function (_0x3ae901, _0x446f9f) {
    _0x3ae901 = _0x3ae901 - 379;
    let _0x30dc1f = _0x56414c[_0x3ae901];
    if (_0x5e79.RAiyFQ === undefined) {
      var _0x2a680a = function (_0x4eedaa) {
        let _0x36e863 = '';
        let _0x32f2e3 = '';
        let _0x2bf6f9 = 0;
        let _0x4e2efc;
        let _0x219a82;
        for (let _0x3f28c5 = 0; _0x219a82 = _0x4eedaa.charAt(_0x3f28c5++); ~_0x219a82 && (_0x4e2efc = _0x2bf6f9 % 4 ? _0x4e2efc * 64 + _0x219a82 : _0x219a82, _0x2bf6f9++ % 4) ? _0x36e863 += String.fromCharCode(255 & _0x4e2efc >> (-2 * _0x2bf6f9 & 6)) : 0) {
          _0x219a82 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x219a82);
        }
        let _0xf69939 = 0;
        for (let _0x512deb = _0x36e863.length; _0xf69939 < _0x512deb; _0xf69939++) {
          _0x32f2e3 += '%' + ('00' + _0x36e863.charCodeAt(_0xf69939).toString(16)).slice(-2);
        }
        return decodeURIComponent(_0x32f2e3);
      };
      const _0x5a5561 = function (_0x18ae51, _0x35f541) {
        let _0x5dc360 = [];
        let _0x9313f0 = 0;
        let _0xb5be65;
        let _0x396f8b = '';
        _0x18ae51 = _0x2a680a(_0x18ae51);
        let _0x57a653;
        for (_0x57a653 = 0; _0x57a653 < 256; _0x57a653++) {
          _0x5dc360[_0x57a653] = _0x57a653;
        }
        for (_0x57a653 = 0; _0x57a653 < 256; _0x57a653++) {
          _0x9313f0 = (_0x9313f0 + _0x5dc360[_0x57a653] + _0x35f541.charCodeAt(_0x57a653 % _0x35f541.length)) % 256;
          _0xb5be65 = _0x5dc360[_0x57a653];
          _0x5dc360[_0x57a653] = _0x5dc360[_0x9313f0];
          _0x5dc360[_0x9313f0] = _0xb5be65;
        }
        _0x57a653 = 0;
        _0x9313f0 = 0;
        for (let _0x246efa = 0; _0x246efa < _0x18ae51.length; _0x246efa++) {
          _0x57a653 = (_0x57a653 + 1) % 256;
          _0x9313f0 = (_0x9313f0 + _0x5dc360[_0x57a653]) % 256;
          _0xb5be65 = _0x5dc360[_0x57a653];
          _0x5dc360[_0x57a653] = _0x5dc360[_0x9313f0];
          _0x5dc360[_0x9313f0] = _0xb5be65;
          _0x396f8b += String.fromCharCode(_0x18ae51.charCodeAt(_0x246efa) ^ _0x5dc360[(_0x5dc360[_0x57a653] + _0x5dc360[_0x9313f0]) % 256]);
        }
        return _0x396f8b;
      };
      _0x5e79.RijMlf = _0x5a5561;
      _0x27ba5b = arguments;
      _0x5e79.RAiyFQ = true;
    }
    const _0x3be03e = _0x56414c[0];
    const _0x44709c = _0x3ae901 + _0x3be03e;
    const _0x3c93f2 = _0x27ba5b[_0x44709c];
    if (!_0x3c93f2) {
      if (_0x5e79.ouwaUn === undefined) {
        _0x5e79.ouwaUn = true;
      }
      _0x30dc1f = _0x5e79.RijMlf(_0x30dc1f, _0x446f9f);
      _0x27ba5b[_0x44709c] = _0x30dc1f;
    } else {
      _0x30dc1f = _0x3c93f2;
    }
    return _0x30dc1f;
  };
  return _0x5e79(_0x27ba5b, _0x3691a3);
}
function _0xc08cbb(_0x24c768, _0x30a333, _0x138697, _0x8be6bf, _0x1fd9c3) {
  return _0x5e79(_0x24c768 + 0x2f2, _0x138697);
}
function _0x5c2ee6(_0x1148a7, _0x2dd7a7, _0x20c423, _0xcaa064, _0x11277f) {
  return _0x5e79(_0x2dd7a7 + 0x8, _0xcaa064);
}
var {
  get_set,
  input_set
} = require("./lib/set_db");
var {
  updateCMDStore,
  isbtnID,
  getCMDStore,
  getCmdForCmdId,
  connectdb,
  input,
  get,
  updb,
  updfb
} = require("./lib/database");
const ownerNumber = global.owner;
const owner = global.owner;
function _0x2a8944(_0x2d29c5, _0x38e4ae, _0x5947eb, _0x35eaa, _0x2bc721) {
  return _0x5e79(_0x38e4ae + 0x226, _0x35eaa);
}
function _0x8de2() {
  const _0x4f2db8 = ['WRmezGL6', 'aSkzWPjuCG', 'nCkYg8kjW7S', 'W6RdLmkXW6NdUa', 'WOZdVmorW7BdTW', 'wbqWWQHc', 'gmkkWPFdH0a', 'W7WVfxvn', 'o8oFW6RdI8on', 'WRecoYnS', 'bCk7iCkKW6K', 'WQqHg8k9WPy', 'yLJdOI0t', 'WOBdRX8Maa', 'ihW5WQjx', 'W5LfWRSFWOq', 'W419W6TWeG', 'd8kqWR/dHNK', 'WRS1bdXl', 'cCkMmCkPW7S', 'W6pcJmk/WOLR', 'ehldG8oPWRG', 'lCocW73dMSok', 'WOhcGbGQcG', 'dMZdMmoyWQq', 'WPhcQZ0mWPC', 'omo8ASobWRy', 'W7ZcKSkJWQ1f', 'WR7dGtCpba', 'WQCMC3RcHW', 'WQZdHcVINPy', 'W4pdRIZdOMO', 'WRBdM0TuWRW', 'z8oVW7u', 'WOldVamUDa', 'WRNdOmoHfG', 'WR7dSIebpW', 'W706c8oywa', 'g8kfW55vqG', 'FYlcKmoGhW', 'W7ldNSoXW7BdTq', 'wwtcGmk/W74', 'emkEWOvJoa', 'WQ88W7FcSru', 'WRHtW4fGtW', 'WR02ad9K', 'W58XwmopvG', 'WOW4xSklqa', 'WRBdJ0WrDW', 'W4v0WR8eWOq', 'pqxdTHtdIa', 'iMtdP8kZsG', 'jSoZW7/dVCoq', 'mXNdG8k0WR4', 'BGWpWR99', 'b34sWOTx', 'rxhdQG1k', 'lmohFmocWQq', 'W4mYuW', 'WRBdJWecrW', 'WPhdGmowW43dOG', 'W5mxW4ddOW', 'WRbOuMWa', 'j1GWWP8', 'u07cL8k1W6S', 'vL3cGmkGW6G', 'C8oaW6hcQb0', 'WOBdScyUda', 'vK3dOW', 'l1z+W4ed', 'u2dcI8k/WRW', 'WRJdJtagdW', 'W6xdHHJcISkV', 'W5ddTdBdUNG', 'W7WatSoeqW', 'WOuOW48QW4C', 'W5Ocx8oLFW', 'W5tcNCoxW5/dPa', 'xxNcICkHWRW', 'W6RdNSoNW6u', 'CeRdOSoQFq', 'WPmUW48zW4W', 'W6DfhSoliW', 'hSojxCo/WQK', 'ycJcH8k7jW', 'W7tdKqi', 'W6RdTqWNsa', 'cSkBWQL8lW', 'bCkMhCkQW7m', 'WPZcOdO0WOC', 'WQRdIZyDcW', 'WQmKW4G2W40', 'k8orW4FdL8oa', 'sMZcLSk9W7i', 'WRyAqSkFBq', 'W53dIZqPrW', 'WQy1CuJcQW', 'WP4/W5fZca', 'd8kLkCkCW6y', 'nmo0W57dNCkT', 'W4VdSGG5yG', 'lmoDymowWRe', 'WQRdKsmRlq', 'dSkBWQ3dKv8', 'nr7dHa/dPW', 'AmkxWRdcMmoI', 'WPhcTHmf', 'kvv2W4a8', 'W63dRmo2W6xdQq', 'lGJdHSkUWRW', 'rgfTW4LP', 'WPTVWOVcMXi', 'W6/dHdlcUmkH', 'dSkNWQL7eq', 'W7/dJ8oSW7ddSq', 'W5r+WRmkWPe', 'WQqhrmkqBq', 'WRhdPuRdTgW', 'WR7dKfTQWRq', 'l2ZdN8orWPq', 'ofXZW5aJ', 'WOG5W44', 'h8kfWPK', 'qx1mW61Q', 'E8odW7ZcKrG', 'W7ujySopbq', 'WQNdQSoKcYO', 'ALrkWR4x', 'emkzWOP2uG', 'eHRdLCkxWRy', 'W55+WRbiWPm', 'cSkzWPbNiG', 'W5frWOFdHZXJW43dJCoUjW', '8ykOTSkYmq', 'W6RWPzAxW58fqa', 'W6xcKSkzWRLf', 'W5FdRc/dVM4', 'WPZcLa0AWPm', 'W50WWPKWla', 'e3FdHSohWO8', 'FvZcLa', 'W73dTJueqG', 'W6VcRSoSWRTQ', 'i8o+W4/dKSoM', 'kZNdVSkDWOq', 'u8kBWQFcJSoS', 'W60yC8oyla', 'nbhdLCkGWRC', 'WPHTWRtcSc4', 'zKLnWROc', 'WQuEkZjS', '8yENVeW4aCof', 'zHBcPmoJnq', 'WRRdRmoXbHO', 'W5VdPq7cJCk/', 'WRaAkX5N', 'oHxdM8kFWOG', 'ESodW7lcIGu', 'kCk2eSka', 'tLJdJZnt', 'WOqzlXj8', 'BCodW6lcNq', 'WPjZWR3cRsK', 'WPL4WRtcRbC', 'WPK6Amk9', 'WPa1thS', 'WOCaymkytG', 'rLldTJv8', 'WRZcQG00WPm', 'W5NdRqVcR8kb', 'AgJcL8kSW7u', 'g8kgWOPrsa', 'l2TCWRKe', 'WPGNW5r6hq', 'F8ktWRe', 'e8ojDmo2WQe', 'pWRdVJG', 'WQeSbcLA', 'kSkNWPj1hq', 'nEkTSUkENmkLtW', 'pmosW7ZdNCkk', 'WOXOWRFcVqy', 'WPzqW7PIBq', 'WRZdLISEbq', 'vvBdVY1A', 'fmkqWQJdSMO', 'W7GLcSo3WPa', 'W7y9wmomwW', 'rwRdSY1b', 'nmkMeSkBAG', 'WPqLz1xcKa', 'W5y6W47dHmoK', 'W4akW4ZdHx0', 'ka/dNCkPWRu', 'WOqwW4jbnq', 'W5mCuSouFG', 'W71tWQKiWRe', 'l2fmWRmC', 'vSk/WOFcLSo0', 'pSkCWQ3dH8kN', 'W7ZdKGKQBq', 'WRCRfJPj', 'WOD8WQ7cJq4', 'WQeRaY5c', 'W5pdJYtcR8kc', 'sI8VWRLB', 'W6NdICo2W6xdPa', 'W7VdImk/W53dRG', 'WQldHsKp', 'sZy6WRTF', 'W40ypmoAWOm', 'yJdcS8oOfW', 'W4NdKItcUq', 'vHuqWQPC', 'WPZcRdah', 'W4OAW43dSSoc', 'WOZcOcyu', 'WRqsoW', 'qHFdHLfd', 'WQ3dPSoHcGm', 'nmkMbSkjyq', 'W68CASoy', 'WOtcVgm', 'gMvMW589', 'g8oXW6JdQmon', 'WRddQSo8', 'yaldH8oNWQa', 'WR02rt9b', 'W63dImo+W7BdPa', 'W7eCdCoPWP4', 'WRddGwddSIy', 'AHuQWRXE', 'ACkgWRRcKmoC', 'ECouW77cMau', 'WPFdUKiKxW', 'j8onASoCWQq', 'WRJdL19CWRm', 'vc4mWPDa', 'W7tdHXyGqq', 'x1hdVWPq', 'u8kBWRRcICoK', '4BwGW57QN6VlIog0VG', 'i8ogBCozWRa', 'puD1', 'thdcLCk9', 'AmoiW6ZdICol', 'vqZcGGuo', 'bmkrWRNdL14', 'W6NdL2RdOcO', 'W4nLWRejWQi', 'WQZdK3JdSM0', 'amkEWRX2oa', 'WRmTatjb', 'Bfi/W5CV', 'WRGBW74', 'W7pcPSkP', 'WQCtCxJcGa', 'qLxdHqC', 'jNxdKLvn', 'u2ZcNa', 'W7iqkmoJWQ8', 'WOidD0ZcHG', 'mKS4WPC7', 'WQZdN11zWRG', 'neehWP5u', 'dCkCjG', 'fdtdRSkLWP8', 'e8kGbmkHEa', 'W6usW4/dPCoY', 'lcBdPZddJG', 'e8kFWR3dHW', 'W50hCCoouG', 'xHi6', 'WPpdOCowW4RdTa', 'W5X0WQC', 'kSk8lSkT', 'WQy9hs8', 'W589W6BdOCoU', 'WQVdJePBWRq', 'W6RdHWS3Bq', 'WPHUWQVcQaq', 'fmkAWPfxvq', 'uuHnW59I', 'W4FdSSo2W6ldMW', 'oa7dHSkOWQa', 'jCogA8orWO8', 'WPjoW6D1FG', 'W6qfC8oyjG', 'WRmUzaXV', 'oSojW6JdI8on', 'WOmpW44RW4a', 'WQyVBSklxq', 'WRJdGtCE', 'dHNdHSkXWRC', 'W5v+WQOPWOu', 'lu8XWPvV', 'W7W1qSoqyG', 'l8kWWOxdQ3C', 'lq7dNCkXWRm', 'zmoeW7tcJa', 'rSo1hq', 'cCkTj8k8W7K', 'WPbFWRn0Aq', 'W60rBSotlW', 'W6/dJJlcSCkM', 'WQJdM0fzWPa', 'W7CWc8kDfG', 'imoFW6JdM8ob', 'wGi2WQLx', 'WRCOW5CJW7e', 'WPpcOcC', 'WOddKJqybW', '4P6aWOrUdW4', 'WQ0nW4BcJdy', 'W7q7wCo5vG', 'WQRdJ2xdPw8', 'ofz8W4a6', 'W7ldPs/dP3q', 'uwFcHSk0W6K', 'b8kzkSkFW70', 'WO0jW4hcNd8', 'W6WzW6/dJSon', '77+n772I77Yvl8oF', 'DXi6WPL2', 'WPqntW5+', 'WOeYW4XWga', 'WQn4W7TzAq', 'f8kfWO1zqa', 'xe3dOmoOzG', 'mG3dVdRdMa', 'WPCUW4KdW4m', 'imoVFCo7WP8', 'WOmhW5VcIZi', 'w8kBWOpcJCom', 'W5ehW44OWOi', 'WR3dTGC5xW', 'o8o0uSorBW', 'W7SNAmoruW', 'vaZcR20C', 'wZFcT8ovjG', 'WRtdLdSOqa', 'W7mlW4ldPCox', 'W6VdRba+qG', 'W6yZs8oeWPO', 'WPqZW68UW5C', 'W50YW5KKgG', 'cGJdKSknWRC', 'fHFdItXh', 'neDKW5u9', 'WOGVW5G', 'WOhdVdGRqW', 'WRacxmkEAq', 'DYhcTmoqea', 'WOVcUb8Ekq', 'WPrUW7JcPay', 'Cd7cO8oPeW', 'W5pcRmkFWOHm', 'W5hdKIy', 'WQZdN3PnWRe', 'WQ4jqr8', 'ECohW6pcIGu', 'AmosW4dcUtq', 'W7iCymoyAa', 'W4ysAmozkG', 'WQeqv8kg', 'W77cPmkR', 'cSoaW6VdQCoL', 'WOieW5RcNdW', 'AtFcUNNWLygi', 'WOmhW5VcMt4', 'W6PPuw5McSozih/cKW', 'W5BdUSomW7RdUa', 'rL5iW6XI', 'u3/dLX9D', 'W4b/WRiiWPe', 'WQ/dIYKhcW', 'l0bXW4iR', 'j0ZdRmobWQa', 'WOKessLI', 'fvej', 'WQKoW5pcHIq', 'WPujW43cSHS', 'ALv6WR4d', 'e8keWPLl', 'WQ3dGcClgq', 'WPdcIGiraq', 'W7malIqJ', 'W65A4Q2K4PYEW5i', 'WQH2WPdcGGa', 'WOhcOayW', 'WOeGW48YW4C', 'WP89fIHp', 'WPq5W48JW4W', 'k8kMamkmtq', 'rXuxWPrN', 'W73dJri9ta', 'WP5jW5b9Aa', 'jCoFW7RdJmof', 'nJtdP8knWQa', 'WQ/cNK1eW6C', 'owTiW6mR', 'fmkMeSkBAG', 'aw3dVxvH', 'W6WKbmoLWOu', 'Cw/cG8kHW68', 'WQyatCkyAq', 'W7pcRCkjWQ5J', 'WOPnWPhcIHa', 'hSkWl8kNW6G', 'WPldHSo/oqm', 'k8ovW6FdI8of', 'o8ohFSocWPi', 'd8k6lmk8W7K', 'WQ7cIH8gbq', 'WRaDcZLK', 'W4dVVz4zwVczOAJIGAJWQjkr', 'wqKTWPHt', 'WPtdKGaIdG', 'W40hbmo7WPS', 'WPGUW5u', 'mbNdMSkZWRS', '8j2gTCkXWRmjaa', 'kCokW7NdK8on', 'WR3dUSoRdbG', '8lMgSuuErCoX', 'mmkTaSkeFG', 'n8k7WPBdOxW', 'emkdWOPmsa', 'kuFdUG', 'W7iyACozcG', 'FcCwWRP4', 'WQC+W5W', 'W7NdNSkL', 'aSkrWQ7dRey', 'W7jFWPaxWQO', 'nMjbW5eV', 'WQFdHhG', 'iKmVWPn1', 'WP3dMxVdTG', 'WPxcHGGqcW', 'key6WQfI', 'WP0BW5rhW5a', 'WP4YW4PJgq', 'WPpdG8oeW4O', 'WOrkW795Ea', 'WORcNc4Aea', 'lHNdMSkJWRC', 'W53VVkVdRCoP8kEIOUkdGpcuORa', 'nHNdJq', 'WQS+W5rWlW', 'odhdSmkoWQO', 'gCoGW5NdJmov', 'v0jnW7i', 'jCojAG', 'W58Vg8o1', 'WPn4WQ/cUG8', 'W6DdWR8qWPW', 'W7BdGItcGSk7', 'dmkdWP90AW', 'WPv4WRNcRqy', 'W6uYga', 'WRdcGb8pcG', 'W7ldRG0eqq', 'W4PIWR/dN3C', 'B8ouW77cKW', 'WOyHW6HwW4HUW7fTmCopwG', 'W6VcVCk6WQft', 'eK0gWOfq', 'krZdPdBdVG', 'ymoiW6hcIXG', 'vWtcHCollq', 'WPRdPvJdGem', 'lCkadmkzBG', 'W7VdImoSW7ddPG', 'WP0qvSoEla', 'WQJdJmoQcWK', 'lCkucCkkzG', 'nfO7WPnV', 'uuHAW6H1', 'W47dR8o6W5JdMa', 'W6GSamoPWOu', 'suVdQCoGAa', 'WQddOSoNW7ddMa', 'WQFdVCoCW5ldQq', 'W4JdIdxcP8kT', 'WPtcQJK', 'A0jDWOSv', 'W4vCWQCIoa', 'xCoZW5dcHdK', 'jvRdPSoTWRW', 'WOm1qa', 'punGW4aG', 'WRmTetnb', 'WO3dU8o9W4NdQa', 'WRdcSreqWOG', 'iCksWOL1jq', 'avpdKv1f', 'WRbCW6Dbvq', 'W6hdLIG2uW', 'lXNdMSkJWRC', 'iCoOW6JdL8oU', 'FvBdP8kIWRW', 'mCkSoCkpuG', 'mSoEWQdcLCoS', 'WPqGE8k9uW', 'WOS6z0BcHa', 'W65vWPyJWRG', 'W6emW4xdQW', 'W6hcOmkQga0', 'W7ZdMHuHrq', 'W6FdUCoiW73dUa', 'WOqnxW', 'rXisWRHb', 'WOa1rW', 'hmkfWPjMjG', 'WOO/da10', 'W7yoW7RdLmom', 'WPaDW4BcLW', 'W7vDzCoeCG', 'WQvUW4T9Ea', 'hmo4bCkPW7e', 'F1NdQIL5', 'lKNdVCoUWPS', 'E8kjWQFcKCoO', 'geZdKez6', 'W5pdGcu', 'm08VWP5I', 'WPjBWPxcUGS', 'aCktWR8', 'zLr2WQGE', 'kK8M', 'WONdQX8WvW', 'WQddIYm', 'W6ZdN8o6W7xdJW', 'WRBcQ+kSKEkFMSoO', 'WO84W4XkeG', 'afhdHKbs', 'zJlcVmoEca', 'W7msCmoo', 'cLFdH1Lw', 'bKhdUmoN', 'W4OzF8oOua', 'bLhdH1u', 'WRSwsSk/Aq', 'W7uiDCoyhq', 'WRidlG', 'WPOqis5R', 'WOejsXvP', 'FwLTW79t', 'WOrZWRS', 'pubKW4aQ', 'WPzRWO7cMYG', 'lG/dLCkGWRC', 'wNNdNG1n', 'k8ovW6FdICob', 'pSkcW7q', 'WOmXW5C', 'WRmnW4FcIti', 'BmoEW6u', 'WQ0bySkxFW', 'WPL4WQRcUKi', 'W7quDSotpW', 'W6lcQSk+WOTN', 'tvLKW650', 'WPyxE0ZcTq', 'WPjjW6bXAW', 'heRdMLLE', 'WQ3cJWGdWPO', 'rt3cM8o3eW', 'E2nOW59X', 'WOyXW6ZcTb8', 'luu4', 'WRJdOmoOaG0', 'uSkWWOTusW', 'WOSuW7uKW6W', 'cuVdHLvq', 'WR4UW5z2', 'WO/cPcWeWOC', 'WOFdTaC6rG', 'WQJdM0fzWO0', 'dCo4d8kSWRW', 'eCkAWOv6ja', 'WPbBWR1+DG', 'pfVdM8kKuG', 'W64dgCo8', 'WOKyW4hcLJG', 'W53dUGFdH1q', 'kSknWQ3dRLG', 'rSktWR/dJ1e', 'WOJdNCoIW4JdIW', 'h8kMi8kVW7K', 'iKFdSmo7', 'WOrBW7r1', 'WP82pcfB', 'W6msC8oZpq', 'W55+WRa', 's0FdTCoX', 'lwCNWPbY', 'qGpcNCoMca', 'WOFdNSoCW5q', 'wfddOSoWDW', 'W5NdJZu', 'nmkplCkDW6u', 'uxNcKCkXW7m', 'WO7dTmohW6VdPa', 'mG3dPJJdIa', 'pCkIWRX2zq', 'oLXIW6aV', 'sSoFW6BcMGu', 'WP7dIWSeza', 'ASojW7/cIGK', 'W5nWWQOg', 'WRJdQ8kt', 'CYhcVCo9pW', 'vKjeW7TO', 'aL/cLvDF', 'W6ZdVCo5W6ddJW', 'W7ldPq3cKCkI', 'BCkkWQBcLmoJ', 'W5uxW4S7cW', 'W5tdQdC', 'WOldHmowW5RdRa', 'h13dM1bN', 'WRNcQJS2WQ8', 'WPddSehdHMe', 'pmkNqCojkG', 'W7BdGWe', 'fahdTG', 'aCkeWPi', 'F8knWPlcKSok', 'WO92WRBcPJi', 'WPZdNt3dQW', 'nSk8WQv6bW', 'yKtdQJW', 'WOVdLHGrvq', 'W7eBW5/dPCor', 'W5FdHdm', 'qLtdRJvm', 'WOvvW6rzAa', 'W4D+WRilWQu', 'mCkMamkmBG', 'W4RcVSk/WRrA', 'W6FdINVdTa', 'eNDCW78K', 'lu8RWPD/', 'WQNdOmoYjGG', 'teFdO8oHvW', 'tupdO8oHAa', 'oxddNSoqWRK', 'E8kAW7tdNmkS', 'WOmbBNJcPa', 'oLxdUL92', '8yQlMW/dMeJdHG', 'jCk2WPpdLfq', 'WRtdN0S', 'jCojW64', 'W5KuWR0W', 'WPNdH0NdIK8', 'W7ZdMSo8W4BdLa', 'cMVdR0fn', 'W6e4qSoFuG', 'WOS4W5DHgq', 'WOqKW79NeW', 'BCkwWRVcISom', 'hL3cLruw', 'WO3dICoDW57dSW', 'm0uOWRT/', 'W5JdRctcUmk7', 'B8ojW77cIGK', 'Ew/cGCktW6u', 'WP8YW4H5bq', 'mSkMga', 'nuutWP1S', 'WQ7dKtaEbq', 'cLFdH3fw', 'f8kNWQpdIv4', 'smkNWP3cJCoA', 'WOzVW5WNW48', 'nwGyWP5d', 'uePnW7fu', 'hConqmo5WQS', 'DwZcOSkOW6u', 'WPWKW5uYW4S', 'WQmQbJrk', 'WRRdJeHo', 'WOKYW5rWca', 'W4qYttxdMa', 'FejxWRSv', 'W6BcRSk0WOW', 'b8onFCogWQq', 'qKtdQJW', 'WP/dI8oKdq8', 'W7KXuG', 'W6yBW4ldOSoZ', 'WOZcMKWcbq', 'WRa1v2FdNq', 'W67dPXJcRCkc', 'WObWy2dcGa', 'W6aAySo0la', 'bCkMbmkNW64', 'W4pVV4lVVyHvsq', 'WRmAqmkgAq', 'WOBcNb8uaW', 'W6pdHZ02tW', 'ovr8W50F', 'W5jJW6m', 'gmk8nSkKW7K', 'W7RdJqSNrq', 'CCkoWP3cL8oG', 'lCkzWPjdaG', 'WRK9ha', 'mMD1W506', 'WQfxvmoyjG', 'nq3dQW', 'WRCifZri', 'WRq9fW', 'W70aimogWPS', 'W67dN8o+W6xdPa', 'WR7dT8oXcGi', 'vwVcI8k5W7u', 'WRuCW5xcVmkj', 'xMBcL8kVW70', 'WRNdHKNdVui', 'WOhdTHGouW', 'WP3cTI0bWOu', 'wwRcKCkXW6O', 'WPfvW6fNBq', 'mv3dU8o2WQS', 'bN7dOSo4WR0', 'WRCQmtnB', 'fmktWOv2jq', 'EJJcOSoWpW', 'W7PcWPyZWOu', 'WRmlqWH+', '8lI4Kmk/WRVdLtG', 'WOS6eWTi', 'WOJdOmowW6ddOq', 'W4K4F8oncq', 'd8oSW63dMmoG', 'qCoaWP1SC0BcQdS', 'W4ddUZRdSKO', 'W7ywW43dTmoI', 'cSkpWOf/mG', 'xJ7cG8oPbG', 'W44/tSo4lq', 'WO5XWRhcQGy', 'C8ksWPFcICok', 'W4NdIGqczW', 'WQpdU8omaqO', 'WRlcJCk5WPyI', 'WPaDW4BcLXK', 'WPpcGX0GhG', 'WQ8/EvFcTa', 'WOi/rKRcKW', 'cCoXW6JdLSok', 'W4VdKYJcV8kT', 'WOJcIHu', 'y1pdKHv4', 'WRldOCkFWP1S', 'WRddOSoqcJW', 'WPFcHHGzaq', 'e08VWP5I', 'WPqrqSkByG', 'WOJdMHqeBG', 'W5rCs8kW8ykdLW', 'W5LAWQSgWR0', 'WPaMW54', 'WPJdT0rrWPa', 'WOqnsc5+', 'rKHhW69I', 'W7O0W4FdOmoA', 'WQFdJ35a8yEZPW', 'FCkxWQtcNmoJ', 'WPqhybvS', 'kSoBW6ddK8oD', 'W6lcUCkJWP5R', 'EeHDW6PJ', 'WRW2W5mrW7O', 'WR5vW5fftW', 'WOtdKtRcT1G', 'WPadcGD0', 'WOOYWPHXgq', 'W6/dGWKMrq', 'WPZcQIKoWO4', 'BYhcTa', 'WOdcJHGCcW', 'omkqWRxcKmoO', 'i0FdUSo2WQS', 'W6ZdKHe6tq', 'W6qoDmoClW', 'cCkTnG', 'fu8NWOyH', 'WOyeW5RcKcu', 'gGZdHCkDWRK', 'mvzJW5yV', 'WPeKAdH1', 'W5zfWRSeWPG', 'bCkmWPNdG0a', 'BSkFWQBcICoK', 'WRSrsSkwwa', 'W7G3dmo1W5u', 'aSkeWPfEtG', 'g8klWOfNiG', 'WPzzW6D5yW', 'hmoGW6ddRCoT', 'W5r8WRO', 'CJtcVCoHbG', 'WPnFW791Ea', 'kCkUnCk5wa', 'fKRdUYOj', 'h8ktWO1lrG', 'k8oBW7NdI8on', 'WQqzW6dcUtK', 'uSoCWQ1Dsq', 'pCk/eSkQW5m', 'Dg5yW7Pl', 'aCoCW6/dHSox', 'mW3dTJtdJq', 'WQ3dL0TyWRi', 'dCkyWP0', 'c8kpWP93bG', 'oSoDFCoDWQS', 'W7BcPmk7WPzU', 'aLOfWR5s', 's1BdQmo3sG', 'W7SBW4FdG8oZ', 'la3dOJhdJq', 'fmkeWPfvAG', 'WRCAs8kl', 'WR0qtSkwAq', 'WPmjW5lcMNC', 'WQ0bzSkCAG', 'W7KjtSotlG', 'W4jtWRmIWQy', 'WRX7r8ovvq', 'bvtdKgDo', '8yceJSo4WOqgWRK', 'W5/dJcu', 'd8klkSk7wa', 'WQ/dM1Dj', 'WOuqwb91', 'CCkqWQC', 'cmkunSk8W64', 'WQ8RW73cJs8', 'W7agW5JdO8on', 'kfPKW4KR', 'pmoQW7RdNmom', 'WQJdKYVdKIO', 'WRZdJsOf', 'WR7dVCorbXK', 'WRTApJhdKG', 'WOxcMGiwea', 'WPCJvwJcLW', 'W4NdJCoiW7/dQa', 'a8krWRFdJ1i', 'WP7cTZenWRC', 'k8oAy8kzW6u', 'B3JdMSoUCq', 'W4n4WQOlWPu', 'nmklW7xcJq', 'wCokW6tcMqu', 'vLvqW6vg', 'bhiMWQvp', 'd8kRWR9rpq', 'WQRcIXWfna', 'WP7dGtCAbq', 'jSoHESoWWRy', 'WPqCxaKH', 'W4mTW5xdG8or', 'WO1tWP3cKW0', 'W73dLmoYW7ZdOa', 'kr3dL8kVWR8', 'W6ZdN8o2W7ddRW', 'kSkMd8kmBG', 'W6hcUmk18ygKP3q', 'omk3ba', 'fmk9WRFdK1y', 'W7vWWQqSWQe', 'W6O1h8o5WPO', 'e8kBWRNdLLO', 'leFdSW', 'pmkjcmkm', 'WR4Vfq1D', 'gf3dM11z', 'r8oQW5NcJY4', 'WOezwMNcNq', 'fCkpWOjGkG', '4BE1Y4JHTR814BwD', 'otZcVSoYgW', 'WP4gntXa', 'WR89cY9h', 'dmkpWOjN', 'W4FdSY3dSxm', 'W444C8oCba', 'WQVdIc0UoW', 'WPjvWQJcHGe', 'WR7WSAIFWRe', 'kSk3amkgCq', 'kvVdMCoN', 'W6JdUYJcMCkb', 'WQBdTCo9W5VdIa', 'd0ldNK1h', 'weHAW7HM', 'W7ddImk/W7JdRW', 'wKbAW6XH', 'WOddMmktW53dPG', 'WOWoAsXJ', 'WPqiW5i2W4G', 'W6WHdmoCWQa', 'WRSRrtzl', 'W4hdPta', 'W7anW5/dP8oe', 'wLTm8l2vT2y', 'WPa1r3S', 'W6G5bCo2WPW', 'lNNdSq', 'WOa0W5qYW4C', 'WO7dGZGjta', 'omohECog', 'W6pcJCkPWQ9B', 'lZddOaZdNa', 'WROejdbO', 'WPNdMmo6W5FdOq', 'W48oW5ZcKZi', 'pvr1', 'orpdL8kYWR8', 'WO54WRtcRaa', 'nNVcGSoHha', 'ExH9W7jx', 'k1TXW5e9', 'W4r0WRadWRK', 'WO8IW4XHeW', 'AvvwWRiY', 'eSoqW7/dKCo9', 'WO8gsr5r', 'WROeBZPM', 'aCkfWP9FqG', 'WR8RaG', 'W5NdSYtcUmk4', 'WOFcIH8wfG', 'i8kgW44', 'W5mWzmoBhG', 'p8kSe8kFAG', 'WO4jW5NcVJm', 'W7CSxW', 'WRapW68pW70', 'WPimW5dcMXK', 'tCkDWRBcRSo+', 'W5ddHdxcRSkS', 'WQNdM05zWPa', 'WRCyodLV', 'WR7dUmo2aWK', 'wLhdVSoKya', 'WRxdIZfkhq', 'wmowWQe', 'WPFcQxBcOsVcVmk2pbDbW5VdVq', 'WPddNSoyW5VdPG', 'WQddNwu', 'a1BdHLf6', 'WQFdGwFdKM4', 'gX/dUs/dJG', 'WP/dRg3dShi', 'WQyCfZTm', 'FCopW7/cMr8', 'WRNdI1TjWRi', 'W7tdQXBdSha', 'CKLeW7XD', 'CcGaWPr2', 'hx52W6au', 'W4eBW5tdSSkz', 'W5xdJYlcP8k9', 'rr3dUYTm', 'W7X7u8ozwa', 'B8ojW6pcIq0', 'WQNdQX8WvW', 'F159WPSg', 'WPyMva5z', 'gSkcWOPi', 'W6/dIZtcPmk4', 'W7hdHc/cV8kH', 'jfiR', 'WOVcPdKf', 'WPK+W4X5gq', 'lSkfWQj3cG', 'rmo8W5FcTt4', 'WP42W59W', 'W7RdJqSWqq', 'tam8WRjC', 'kuRdH1Tf', 'W6qpu8ovpq', 'sGa5WRHa', 'W7NcRSk1WOTT', 'fvv2W5W9', 'W7ZdKaq/Bq', 'WR3dJNNdG1m', 'WPeEW7/cQW8', 'oXVdOtZdIW', 'WQVdSJmiiG', 'W47dHghcGSkU', 'WORcQIKPWOy', 'FYlcNmoH', 'WR7dKfS', 'C8ojA8oikW', 'nCkUWOL6DW', 'W5xcVfXWaa', 'kSkIbSkn', 'WProW7P/yG', 'WR9EW7m', 'vSkSWRhdNVcKKPO', 'w1JdTc1a', 'W702W77dQSo7', 'sae4WQLu', 'W6RdJraHqW', 'pmkZdCkrkW', 'W5qAW4hdR8on', 'W6hcV8k+WPfS', 'WROvoInQ', 'dCkXlmkSW74', 'WPmCW5tcJsm', 'W6aysSooua', 'WQaYW4TMhq', 'W4eZW67dQ8oB', 'WQmRW7dcIcu', 'qLJdOI0', 'm0BcLa', 'CYlcOSoLfq', 'WOddJXG3ra', 'W5m0W6tdQ8oc', 'WQhcVqq1WO8', 'oKz+W4y6', 'W5GBW5JdP8oh', 'omkrWQJdH1G', 'WPNdQ8oBW4ZdOW', 'WR/dSxhdGg8', 'W6NdGNlcQsa', 'v8koWPbNkG', 'W5i0vmo7pW', 'E0XeW64', 'WRinW4xcKY4', 'imkHa8kGxa', 'WOP/d8os8jYrIG', 'W6S8qSoFuG', 'W5CzqCo1la', 'lqNdH8kV', 'oCkzWOpdO1q', 'WPivFLxcPa', 'kIhdLbNdRW', 'WQeTbYHA', 'W6atC8kDjG', 'W57dLWpcICkL', 'dgfvW6mh', 'W7JdLIGREG', 'W7FdImoDW77dTq', 'W5tdJ8owW7ldQG', 'WPxdIColW40', 'W6pcQ0VdTCoO', 'W7xdK18o', 'W7ZdLmoRW5/dTa', 'bSklWQ7dL0e', 'oNZdNK1w', 'yJtcOSoW', 'D1nWWRew', 'WOW6W4ZcKqm', 'W5eYW5OWW4S', 'W6GIdSo0W5u', 'wHuSWRXv', 'auVdKG', 'WPVcRc4bWOW', 'xqnNWRWf', 'WQJdU8oKhrG', 'WP0XW658mq', 'EmkxWRJcMmob', 'W5SJC8oqxG', 'WPqYW4GNW4u', 'h03dL15s', 'WR3dLg7dOuC', 'gSkajmkFEq', 'WOqnxXLP', 'WQffW7JcU3C', 'WPjZWQVcRc4', 'pSksm8k6wq', 'WOxcGb4cbq', 'WO58WR/cRa', 'WPqcW5Xrda', 'lmohFmoWWQq', 'WR3dL0nyW7a', 'W4r0WRadWPu', 'W7W5hCoHWQ8', 'WQ/dQmo/W6pdRq', 'sgxcGmkSW7K', 'W4auW6RdVSoK', 'W5ZdRcSJEG', 'W5r5WPWuWR8', 'WOaYW4TMhq', 'aCkxWPLD', 'uGmSWQ5t', 'oXpdHSkWWRm', 'WOxdUHKW', 'cmoHqq', 'WPCUW5qYW4C', 'lCo8W6xdKmot', 'edFdSCk2WRe', 'WP3cVsOfWPa', 'p8kSdSkCBG', 'kGNdStxdGq', 'oCkydSkkW7S', 'xHq4WQ4', 'vKRdRmoRya', 'WQC5AX92', 'lX3dVsNdIq', 'bCkMaCkLW7G', 'W7FcR8oSW5KJ', 'sSk6WO7cHmo6', 'W4rHWRioWOq', 'W7FdImk/W7ZdPa', 'W4JdGSoZW6hdRW', 'D3/dMr1S', 'F25JW6Xk', 'WPqnW7aPW7a', 'FejxWRSG', 'o8kZfmk/W5C', 'oCohE8ohWQy', 'vw7dMbnp', '8yQlNG/dMfJdIW', 'WRBdM0fjWRq', 'Be5jWR4E', 'lr3dHSk0WRC', 'mK3dUCoTWRO', 'l8oQq8oZWRe', 'WQpdIMjyWQ4', 'W6ykW4xdPCoi', 'W4ddTgPvWQP4WORdMwRcTq', 'FbLdW4aG', 'WOTqWOdcOtK', 'WOvFW6n8Bq', 'WPRdLxHSWOK', 'uuBdVG', 'k8kSfSkHBW', 'WRddNGCnvW', 'xeJcKCkSW64', 'c8kWWRbQgG', 'WRFdH2j3WO8', 'WORdJ37dVx4', 'nmkMd8kCyG', 'fJJdQY/dJW', 'AvpcTCkRW60', 'W7KZcSoZWOe', 'W4hdIthdUW', 'W7pdJqW9', 'B8ouW77cKY4', 'W6ZdN8o2W7/dPG', 'W6q9t8ozwa', 'jCojASoHWQO', 'uaG6WRL4', 'WRuwW4NdTmog', 'W55IW74kWPu', 'W6aZeG', 'FfDvWRye', 'W4tcQSk6WRXm', 'WQCqtSkwAa', 'Ae3dKmkHWRe', 'WPtdISovW5ZdTq', 'WQlcIrW2WRS', 'aGNcQ2eAWPy5W5ugWP/cLSogW7i', 'WP/dNaOlcq', 'WRajxM7cKW', 'WRJdLI0h', 'h8kkjmk+FG', 'o8ooW6JdKCoE', 'WOddQtSrua', 'oa/dH8kMWRu', 'WR4zW6WKW7q', 'dKK3WQPV', 'jfKSWPn8', 'cmk1jCk+EW', 'ob3dVd7dMa', 'AGJdIW', 'WOmEW43cHIy', 'WPaAW5dcMt4', 'pvr1W6WQ', 'W7S2xSoixG', 'o8oFW6FdM8oI', 'W5T+WRK', 'W7VdGG8', 'wJutWRT4', 'WOK1W7yJW5e', 'WP5jW5j0yq', 'bSktWOzm', 'WRH0Da', '8yckS8o4W6mNWQ8', 'BmkBWRxcNSo5', 'aSkdkCkyW7m', 'WQeBW6WTW5q', 'xxpdGcbV', 'AGSKWPX5', 'WRXqW4zYFW', 'lq7dKCkHWRS', 'kCoaB8ohWOq', 'W5ZdQaRdUxW', 'W6dcO8kfWPTM', 'xgBcHSkTW7e', 'pmobASoqWQO', 'WO51WRFcVIi', 'WPn2WQVdQrC', 'WQfDjW', 'dblcTt5a', 'WQ/dKMtdVL8', 'WOiIw2lcSa', 'W5BdUsldS1W', 'WQKgxW56', 'xeRdJ8o2sa', 'WOywqmkaAq', 'WQ14WPBcVXy', 'BCoNW6xcIH4', 'e8krWQ/dKfa', 'WPuAqa', 'AmkAWQK', 'WQeejJHT', 'WRukW4pcPSok', 'tduMWRnr', 'W7pcRSkVWQXl', 'W7S1W5xdR8ol', 'WQ8rW69mgW', 'WQKMBeJcPa', '8ksALSkvhNna', 'ixpdSevu', 'jMyAWPbU', 'WQ3dLImz', 'WPxdUcyxBG', 'wComW6RcKWy', 'EHlcN8oxfG', 'WPTFW6D1Aa', 'WP0XWOe', 'W6hcRSkIWPXp', 'WPhdJCobW4RdOG', 'W6FcUCkG', 'W59uWPGTWPC', 'o8ozy8oZWOm', 'WPGCyr9O', 'WQ/dGreAdG', 'la3dSZ7dMa', 'W7jFWPOZWR8', 'ALvyWRm9', 'W7tdJuPoWQ4', 'WOW1vwVcLW', 'd8kWf8k4W7G', 'W7CSx8ozwq', 'veFdTa', 'W6uMqSoiuG', 'omo8D8ofWQa', 'ws0zWPD/', 'WO7dM8oDW5ZdTq', 'aCk0e8kVEq', 'W68Zb8o1WOe', 'weHDW6jQ', 'W5CUtmoqga', 'xgZcGCkmW7K', 'W4JdMdhcRG', 'WPqVW581W7u', 'WO/cGaS', 'kCk+WQFdK8o6', 'WPuLw3VcLW', 'aCkza8ksW4q', 'ycNcHSoZnq', 'o8oFW6FdM8o0', 'W6BcRSkHWQ9w', 'WR7dU8oXcH4', 'g8kVWQPkra', 'hCksWOv2jq', 'uKFdVSo2zG', 'WOrZWQ7cGXK', 'vHyRWRrD', 'WQJdV8oPbHG', 'WPOQW7CTW64', 'W4RdQs/dUW', 'cYNdK8kwWOa', 'W6xdHJFcICkH', 'DvddVYbS', 'WOK1r3ZcKW', 'eCkzWRD8oq', 'oCoDBmogWRe', 'W5ddUtVdOW', 'W5FdTIdcUCks', 'r0zqW78z', 'W43dSmo+W4BdQa', 'eSo1W5NdNCog', 'W4bcW6BcMJK', 'gxRdMhfH', 'WRCylcjU', 'WQa7W7TaoW', 'CSkrWRxcMCoa', 'oCkejmkDW7u', '8yU1I0uwsW8', 'WOuqrqLV', 'keC+WPv+', 'W7JdR8oXW6xdLW', 'WRypoW', 'kfK0WPvW', 'wuVdOCoGkG', 'WPdcGWuwaq', 'WOCYW49+pq', 'uCooW6ZcKWSKW57dMxtdNr0', 'WPFcPbyehq', 'cmkgWPjWgG', 'bg3dMmohWPO', 'WQesiZz6', 'lrVdSZRdIq', 'WPuEiZi', 'WPxdHCohW5xdOG', 'c28rWObr', 'n8k7WQ1/Da', 'WQemW5JcLJK', 'mW3dOs7dJq', 'c8kpWOi', 'WRywW5KoW6G', 'WOe4W58', 'DXJcTq', 'tHq0WR9t', 'W5auWOBcG2m', 'ivZdTq', 'WROsW58cW5y', 'WPX6WR3dUW', 'lCkBWQNdKvi', 'oaFdObJdJq', 'pSoEW7q', 'i8oAB8kyWOG', 'WOCbsGm', 'WPritGmH', 'maZdKmkUWPK', 'ju8S', 'W4FdQSo2W4ddMa', 'W747ta', 'BCojW6BcKaa', 'mmkUWRvNhW', '4Q694P2gWPHv', 'fSkpWOzGjW', 'W5vaWOWKWOu', 'd8kqWQK', 'WQj+W71eAG', 'F0zlWQSz', 'WPO2W4PXgq', 'W5JdVmoxW5JdIW', 'hCksWOu', 'r0HeW6rZ', 'WPFdUG0Tta', 'oXRdOdldNG', 'ESowW73cLXG', 'WO/dJCoAW5xdKG', 'W7BdIcu', '8kI5O8k+FCo/W78', 'WP05lJ5R', 'tbldUYLa', 'WRRdQmoG', 'WOeDW5hcLJG', 'WOuxWRXIBq', 'lsVdVtNdIq', 'AJaiWOvR', 'WRWfw8kByW', 'WPpcNqmtdq', 'W78XwmopvG', 'WPRdHxNdPw8', 'BmoEW6xcMWi', 'w1JdVJbi', 'WPqCsqHw', 'u0jBW45M', 'sbiPWRzG', 'WRC9sZny', 'lvxdNN9b', 'W59UW5CVW4a', 'av3dHKDw', 'WQJdLgO', 'jSo0W5NdKSoO', 'obRdVtddOq', 'xxhcKq', 'WO7cJqiudq', 'p8oBA8oh', 'WPuZE1xcGG', 'p8ktWO1lrG', 'WPuJW7vWdW', 'zJxcSmoWfW', 'sXq2WRa', 'W4JdLc7dKM4', 'gSkUWR16ca', 'WRb4WQZcQaC', 'od3dJCk1WPa', 'W6hcRSk/', 'W5SlW77dLmov', 'ie06', 'WQNdM05EWQK', 'EwvpWRGA', 'xw3cJmkSW7K', '8yMMRq9WWRJdUG', 'v1hdSZHA', 'tWCTWQLB', 'gSksimkLW5m', 'fvfdW6qF', 'WQVdOmoPaW', 'WR7dJf1sWQ8', 'e8kBWRtdHLy', 'WPGUW4G', 'uIitWPPc', 'WPWJW540', 'WQrThmkiatpcHuxdVxmHWQn8', 'WROhoZ5S', 'W7C6xW', 'lfhcTq', 'WQ0nxWL6', 'FqVdLCk0W7i', 'WR7dQcuydq', 'WP80W5y0W4C', 'W5P0WQ0uWPe', 'eeLFW7uE', 'a8o2W5hdKmo2', 'WRqXcs9l', 'W6hcO8kLWP52', 'WOldICoMW4NdOW', 'tu3dUSo2', 'FCkgW7pcH1y', 'WOKfW6eQW6y', 'W6ZdQSoSW7tdTa', 'otFcPmoQeq', 'BIxcNmoHaq', 'WQmsW5rbmG', 'l8oqEG', 'WOZdRXGWvW', 'e8kpWQPDxW', 'W5/dQcVcOCkB', 'WPFdGYOVuG', 'WPFdMqu3xG', 'WPiIgXHC', 'AmosW7a', 'mCk9WObHiW', 'WOvPWPhcPWu', 'WQJdUSoNbqK', 'W6hcKqbqWRG', 'WPDYWRhcPW', 'W51QWRNcUKm', 'WQ/dQSo9gW', 'WRyCx8ktyG', 'WQ8CBgdcOa', 'eSkZWR/dKua', 'W6ulW5/dRSon', 'WPmDW5FcLti', 'W6r2pCoXWP8', 'rL1fW6jZ', 'eCkvWOLGqq', 'WPe5FJL3', 'xLFdQCoSAa', 'EWDBWQzk', 'W53dLcxcOSkN', 'WPGKW44eW5i', 'YA3HTyhHTQdQNBFHTQi', 'wuJdRILC', 'c1hdKW', 'WOjiW78', 'eCkjWPHJkG', 'WO42W4X2fa', 'WPFdNruTvq', 'udBcOSoamq', 'W6WyDmookq', 'a8krWRtdHfO', 'WP43W64WW4O', 'WO3dVHGQwq', 'W4j6WOylWR8', 'W7uuv8oNkq', 'W53dJsJcQSk7', 'W55IWPeqWP4', 'W7ldPGBdN2O', 'W6OIdSosWOa', 'lCkQd8kpEa', 'hXe+WQ4s', 'WQVdLGbBWRq', 'WOldNa41rW', 'W6m3gmoDWPa', 'heZdGq', 'WQZdJezjWRG', 'WO4BstD+', 'W605gCovWPq', 'WRNdLqqGaa', 'W7hdLHxdS3S', 'l8kQWPJdRhe', 'WQJdM0fz', 'BdiEWOLN', 'W4NdPwzvra', 'WRiAkJbH', 'WPpcMH8D', 'W53dKJxcRSkS', 'WOq6W5LYgq', 'W4ODcSo5WPS', 'W4tcPd8Mwa', 'W7VcU8k4WPfT', 'pmoFW7hdIW', 'BgZcNCkSWQy', 'FK3dNSoevG', 'WPaLW58', 'lSonFq', 'EJ7cTG', 'f8k0WRn+uW', 'WOKgtXzU', 'WR/dGsOojW', 'WRFdNCoXW7ldGq', 'jmoFW73dMSoa', 'F8kkWRu', 'WRqEks4', 'WPtdRhDVWRa', 'lx9uW6CG', 'WP0NWPz7gq', 'lKC6W4eK', 'dmoFW7RdNmow', 'WPPFW6bJBq', 's3xdPCoNAG', 'WO3dJmo8ldW', 'WQ7dJKTCWQK', 'W7ldHXW', 'WQespZTI', 'w2tcGq', 'lL0wWR5p', 'WRBdRSoIcI0', 'ihNdMfvB', 'W6RdSrW9qW', 'qSk/mCkNW7i', 'WR7dT0fBWRi', 'WPX+WR3cObC', 'WOhcQZytmW', 'hSkzWPLFqG', 'jmojESoCWRm', 'W5jIWQ0gWPC', 'vfLbW6vM', 'tepdQSoG', 'cKhdSa', 'WOuUqbvS', 'tuFdVCoPzG', 'WRxdVmo1bH4', 'E8knWQFcNmoQ', 'WPRcQIOUWPC', 'W57cOumUuW', 'FHtdRN0', 'WP98WQVcRa', 'WPWwja9y', 'WPmBsG93', 'WRTskmouEa', 'W6q/uSofiG', 'iM7dOv17', 'g8kfWRHxvq', 'W7VdS8kL', 'W63dNSoXW7xdJa', 'W6pcGfq', 'dmkzWQrJlW', 'iv3dKv1w', 'hY8RW71L', 'WR0qW7T2la', 'WPFdQWiNuW', 'AICjWQVWNQkJ', 'WOCzCgRcMG', 'WQZdICohW5JdOW', 'xupdRSosuG', 'W7FdLSo+W7BdPa', 'xuxcJmkRW6G', 'W6vdamkMyW', 'guddQSk4BW', 'W4JdJbaNAW', 'W6tcHSkuWPby', 'A8ohW6pcIWi', 'WPPFWOVcNsC', 'wKtdRJXh', 'c8kCj8kzW7K', 'ySodW6G', 'nmkFWPjDDa', 'WPeDW5RcIZi', 'cSoUW4C', 'pSkiBmomW78', 'W5NdHsJcV8kT', 'W7RdIXuYtG', 'WQldLYeNdW', 'x1ldTa', 'B2ZcICk7W7m', 'W4v+WQKUWPq', 'W6VdHWqWva', 'WPlcQmoOtYi', 'wf5o', 'f8kYWPfXAW', 'W5JcSJ8tW4i', 'WO51WRhcRXC', 'WONcSdeuWOC', 'D8krWRRdKSoU', 'mqNdTG', 'bCkgWQ7dH0e', 'WOuNASk0rq', 'h13dM1bs', 'WPdcTs0mnq', 'WQNdMmotaZ8', 'WPHTWRtcSem', 'WQC5tSkaAW', 'WOKfD0VcSW', '4BE14BwpWPJkJog1SW', 'W7WsW4NdLCoA', 'ghVdMevs', 'WO3cUqCLcW', 'W5zHWQ5jWPm', 'WO4pW7tcLWu', 'W7GZga', 'W6DaWOW0WQq', 'WO94WQJcPrO', 'W7eBW4ddO8ox', 'lZJdOCkwWPa', 'w0FdQCoryG', 'n8kkf8kQFW', 'lCk/WOldVwa', 'cuRdTLve', 'W4hdRZddTN0', 'wLddMCoTCG', 'W6mHrmoiuG', 'oCkfWOfHlW', 'l2bKW4WT', 'WR/dIZeycq', 'WROZltvO', 'WOi5W51XnG', 'dmkfWR18pa', 'W5ClW5JcPSoQ', 'W4RdRYZcOSkh', 'WOymqCkr', 'WPtdQX4', 'bxjNW7yj', 'WP7cTZen', 'WQNcQaaMcW', 'FrRdM8kYWRW', 'W4yCzCo9BG', 'W5dcU8kGWPfm', 'tSkVWOBcRSoz', 'oXZdPJJdNG', 'wZtcPCoLfG', 'WOtdHcVdUNK', 'nCkpWOvYlW', 'W6dcPmk7WRfM', 'a8kFWQRdLLO', 'WRyvacHD', 'sgVcLCk9W6K', 'WRRcRsa3mq', 'BIxcMmoQfa', 'WPamW4KUW6a', 'kCkAWQpdK0y', 'iL3dOmo2WQe', 'xefmW5H+', 'W4xdQ8otW4tdHG', 'WRTHx8kKW4C', 'WOe7cILl', 'WRpdILTnW6C', 'W7CrW5JdMCon', 'h13dM1b6', 'ntVdPJZdMa', 'WR86acK', 'WQ/dTSo1cG', 'vKjeWQrr', 'WQ3dHxG', 'WOucW5y3W4C', 'W4BdSYFdRG', 'W5JdQqq6tG', 'gCk8WO9Byq', 'WRWHw8oyvG', 'W7JdQclcKSkN', 'WOqnW5hcQZi', 'W4ZdLdlcOW', 'W5FdMXVdUw0', 'WOyAW5RcKHO', 'WOaKW58', 'sgJcL8kSW7u', 'WO95WRhcPWq', 'ymoeW5/cLb4', 'WOuqW4hcMJK', 'WPFcQY0', 'W6eXrCoyuG', 'WPuKW58sW4C', 'W7KZcmoLWOC', 'WPL4WQVcQHe', 'WOuBxXT8', 'obJdNCkZWRC', 'W747cCo1WOC', 'jKFdPSo1WQ8', '8yURMw99r0y', 'wKSRWRHa', 'g8kcWPy', 'WRdcLmoVW73dTa', 'W5n0WQ0', 'e8kUWR7dL0u', 'oSkUbq', 'W53dLsa', 'AW02WRby', 'WQNdGCoWaG4', 'aCkom8kFzG', 'WONdM8oDaHG', 'mCkKWQ1qFW', 'WRtcHWuzaq', 'WQNdLNK', 'WPhcIGGgsG', 'WP7dNCotkr4', 'WQuhsSkuzq', 'd24tWQHX', 'WOSeW6jGbG', 'WR89fIHp', 'v33cISo1W4W', 'WRuywf/cPG', 'W6aCzSkeFa', 'W5RdRW4KCq', 'cG3dQINcLG', 'W5FdTcZdOfS', 'WRKnlXzP', 'W7ZdMHe2tG', 'W60yoG', 'W7GBW5/dTCoc', 'WOC+W5W', 'WQ/cR8oNfLy', 'vw7dOW5n', 'WOmbxbT1', 'W7VdM0uLqq', 'cmoMACo/WO0', 'W6vqW4ldO8ox', 'WPFcIHqb', 'gxaWWQDI', 'ju8SWPfP', 'xxVcPSk5W68', 'zYtcVSoWfW', 'WRZdLIShaW', 'W6u7W4/dP8o7', 'hCkzWOjYla', 'W53cMmkwWOPN', 'teFdO8oHsG', 'lq3dVdNdIq', 'rKHhW69k', 'ymovW5FcKr4', 'gHhdUWVdLa', 'fCkIbmklW6u', 'W6dcRSk/WP1S', 'WRZdPuXv8kArNW', 'W4FdSY3dO38', 'pvfYW4KN', 'yg7dKtr5', 'WOC4W5f7', 'WQFdLSo8W7VdPG', 'dmkBWRtdHuC', 'WP/cOcO', 'xe7dMZHb', 'W7tdHWSNsq', 'WQyfq8kBEa', '8yofKSkBc8ohuq', 'WPqrxb8', 'WRXiWOZcHJW', 'y25nWPOd', 'WPzEW4bbqG', 'W5FdNLPfv8kpdCk4W7HhA0XO', 'oConymorWQa', 'WOKBW7lcJtG', 'WOZcM0WMaq', 'WOmfW5hcTJm', 'dd7dLCoPWQu', 'WPWKfsvM', 'WQqHdSo8WPy', 'krxdGmkRWRC', 'WO3dTSoPhWi', 'e8knWRVdHvy', 'W5JcItSgWPy', 'W5L94QYF4P2giW', 'W7KZcSo0WRm', '8yABVHqLWRzz', 'WQLeWRNcKra', 'WOhdHauN', 'WRtdUunnWR4', 'W6eupSoBWOq', 'mNKMWPX4', 'AamZWR5D', 'WPmZmGP6', 'WOLUWO3cUqC', 'WQCopZi', 'W7ddJbe2uG', 'WR0NtSopra', 'WRZdKtCc', 'o8oXASomWOi', 'WPCXW6dcVHa', 'E2voW59I', 's03dGCoQCa', 'vK7dQmowCW', 'WPLBW78Wyq', 'ESkBWRJcMmo5', 'kuKmWPzO', 'WQ/dQCovlqO', 'WPmeW5ZcNdi', 'W7RdJWe', 'lgVdMSorWQO', 'WRytB3yI', 'BamSWQ5B', '8yolR8kBBmoMrW', 'FGRdQ2FcHG', 'WPa0cIbX', 'l8omz8obWQa', 'kfKaWPb0', 'WQhdGtCzcW', 'r2JdOSogCG', 'j8onFCogWQq', 'jItdGrpdGq', 'WOiqW5rLhW', 'W7eBW58', 'a8krWRtdLfy', 'W4akvuaX', 'W78rW4xdQa', 'WRhdIs00vq', 'q8oXW7/cRsK', 'WRmSaa', 'FCkgWQ3cVmox', 'kK3dO8oPWO8', 'dmknlCknxa', 'xf5MW7XP', 'z29iWPiC', 'WPWQW58VW5a', 'o8k1i8kQzG', 'W4aFW5tcJhC', 'bCkBfCkdW60', 'dSotW6xdMG', 'WPqAW4lcHZW', 'WOddMmos', 'WRJdPYKBdW', 'v8kUWPBcMmoI', 'W5NdLmoWW7xdOW', 'lCkyWQVdJgK', 'W5G5rSoAFW', 'nmk8WRxcMCkT', 'tfBdRmo3CW', 'WPvvW7DP', 'zSoqW4tcIaq', 'W5RcNCk4WQfk', 'WOqhwXr3', 'W5ZdRcZdVh4', 'WQNdQSoOabO', 'mbZdOxpdMq', 'W59LWQOxWOm', 'WPC0W5uLW5y', 'mfz+W4i6', 'W5pdHrBdLL0', 'W4r0WR0tWPK', 'WRZdJebiWQ0', 'k8osW6JdIW', 'WPTvW7q', 'WO0oxs9Z', 'WPdcNa0saq', 'kub1W5C', 'zSoxW7pcHHy', 'hSktWPbFuW', 'cmkWD8kRWQ8', 'cfH5W4GK', 'W5NdMtxcRSkM', 'W6WZgmk+WOa', 'WOddSeNdTMu', 'fdldLGVdVq', 'WQeufq9n', 'zmodW6lcJq0', 'WRzIW7rdEq', 'F0zlWQWv', 'aCkWmCk7W70', 'yftdQmkI', 'WRayitfQ', 'WOKUwHfz', 'W7imW4pdS8ot', 'wrqWWRa', 'pmkWeSkjBa', 'W43dLc7cV8kT', 'WP/dHYSydW', 'W7CGx8ozrq', 'WO94WRNcQHC', 'avRdKey', 'WO58WR/cRem', 'cZ3dLCoQWQZdT8kLWOHnCCk0CgO', 'bH7dLHxdIa', 'W67cHpcKLAewWRm', 'o8opW6VdLCob', 'cSk+WOHJlG', 'W5STW5ZdGSo7', 'nv91W7y3', 'l25xWRXE', 'W77dUtBcR8ka', 'j8okA8ohW7C', 'WO0nxWL6', 'WQlcHtSzmq', 'WRBdVHepaa', 'W5FdUs3dS1C', 'WQSoaG91', 'C1pdNmoixG', 'gSkGWQXSza', 'WOBcPGufdG', 'wWVcL8opia', 'WROFW7JcPGy', 'WRmhW4BcHtK', 'W6hcMSkDWRDd', 'W7tdV8ogW6BdLa', 'WPddQXq3', 'WQNdVmoKgWu', 'WR4pjrjg', 'WP7cSdadWPy', 'W6BdJ8osW7tdSG', 'oxP+W4mH', 'WPldJCouW5W', 'WO/cLYlcN8kCcJNdUa', 'WPXPWRdcPWi', '8kIAMddcJXRcLq', 'W4ddSZtdUxy', 'pmkTbSkCyW', 'W43dHX0NgG', 'hXVdUSkLWQm', 't8kBWQFcQCop', 'WQu8gmo/WPS', 'WPTYWRFcVqy', 'W74BW5u', 'thvQWRCO', 'ASo/t8kvWRm', 'WOddMmo+W4hdNq', 'WPmCW5tcIYi', 'k8kDWRhdL30', 'lCouW67dI8om', 'WPtcNZ03WPq', 'W4JdOIZcUSkT', 'vKH8W7TJ', 'WPXHW40NW4G', 'tMPwWRWb', 'p0D5W4OG', 'zttcV8oGpW', 'j8oby8oqWRe', 'bvNdUSoHWQy', 'WPhcMcGKaa', 'WRS3c3rn', 'j8oGW7STAW', 'BNpdLsfD', 'oSo0W7ZdKSog', 'WOWJW7vTjG', 'vvldTc9m', 'iSk0l8kT', 'WOvvW6rJ', 'FmowW7xcNXG', 'zmodW7xcLW0', 'W6yxW4ldOq', 'fCkyWRZdH0e', 'WO8gwb91', 'W7X3fJ5A', 'fH/dN8kYWPW', 'evzJW5yV', 'W5f+WQWIWPe', 'WOuSW5ONW64', 'WPWaz8kNDq', 'WPGJW5f5', 'WQKeW5GaW6O', 'iLGkWPzC', 'WRKbkGbK', 'W7FdTGaRva', 'iuxdSq', 'W6RdMSo8W7NdRa', 'W5CqW4b1yG', 'esBdJrtdQa', 'WRZdO8oSkZ0', 'W4RdLsC', 'WP3dPt8oWOy', 'ww7cGmkrW7G', 'WPvHW5GPW48', 'WRldOt8NDW', 'kNKRWPnV', 'omk+k8kLW7y', 'WPBcPdCmWRC', 'rgvtWQSb', 'cw3dH1G', 'n8kxbmkqFW', '8jYQIrNdTttcUa', 'WOuKW4mY', 'ufZdTIPm', 'pv51', 'h/cxUOhINQ0', 'WR7dJvXCWRO', 'WO0FW5dcVJG', 'vsSlWPDi', 'pCohw8o0WOC', '8k22UY7dUmkGWQu', 'W6RdKSoRW73dPa', 'WPGCW7JcMIq', 'i8oBtmoAWRe', 'WQ3dJ3ZdVwy', 'k8kuWRHzBa', 'jCovW6tdMSok', 'hmkdWPbspW', '772f77+N772JW6JcSq', 'WQrAWQNcNZm', 'W6a7xmop', 'jCktWPjBsa', 'WOdcSrmfWPe', 'WRJdOSoHjGG', 'FwTCW4rp', 'WPhcNa0bdq', 'W4ZdLdlcO8kM', 'zxVdMXrQ', 'zshcVCoTbG', 'WQJdN0HyW70', 'AWmNWQKi', 'h0VdLfns', 'tfRdJa4D', 'WPCOW5uI', '8ko5NCoEeNnl', 'W5mYWRtcOae', 'WPRcRqSRWPe', 'a8k0jG', 'W7mzwCouDq', 'WR/dHsmpsG', 'dSoeW7O', 'BgpdQSoRsG', 'W6NdNrVdIeK', 'W6tcOSkOWP1T', 'WQJdLKbkWPW', 'WPFcGtikWQ8', 'WOviqHvV', 'WRafW7RcIa0', 'W5hdPIFcVCkB', 'WRyysW', 'WOJdGmowW6RdSW', 'W7KjsSoyoW', 'WOiXW5CVW5y', 'WOSzCw7cVG', 'WORcOd8dWPy', 'W6ZdTSo6W6ldSG', 'WPBdQSo2ha0', 'cG/dKrZdUq', 'WPVcQJauWOC', 'eSkrWQ3dQ1C', 'WQDkW7Tavq', 'dmkBWORdI1a', 'WQ5mW6T0EG', 'obRdVtddRG', 'rv9gW79O', 'mmolASoLWO0', 'vwZcLSkRW70', 'WOFdOWGkuG', 'lCocW73dMSow', 'WOnsW6z9BG', 'W6qrhSo6WQu', 'W6CrW5VdTq', 'WRanw8kxyG', 'W6ZdNSo+W7xdJa', 'bvBdGvff', 'WRJdKuflWRG', 'WOuVEmkzEG', 'AZ8pWPr8', 'ECkHgmosiq', 'FSo/W6JcLqe', 'kSk2a8kcBG', 'lMddGLb/', 'qKjkWQWr', 'ugZcHmk8', 'WPxdICoaW40', 'i8oTAmoxWRy', 'uxRcQmk9', 'qmoEW7O', 'WR/dGsOodW', 'j8oBAq', 'WORdHJScFG', 'WOJdN8oWW5tdOW', 'WPejbZb8', 'WOSLW5D4', 'W6VdSXy2vq', 'kfTLW4GS', 'hSkWi8kSW5O', 'WOVcOdaeWQ8', 'WQyAu0VcOG', 'je3dUmoNWRO', 'W4/dHc/cR8kf', 'WQy9fI8', 'FCoFW6hcMW', 'zItcOSoS', 'WQu4W4SJ', 'WRCIW6tcHI8', 'BMBcTSk8W50', 'lCk2e8knxG', 'cmkWjSkCW7K', '8lArG2pdGxVdOq', 'm8kYWQ7dPfW', 'WRldKKPUWQq', 'DCklWR/cQmog', 'W7pcUCkRWOS', 'm1JdUmoRWRO', 'DctcPCoWhq', 'WQZdKKJdSNK', 'WPH8WQ5t', 'rhvBW5P3', 'WRmvmZr7', 'eCkzWPnvrG', 'WRK6gX15', 'dmk6WPr1jG', 'fgvKW7Wg', 'ghxdVNDd', '8kgzGCoror/dIG', 'uf5AW6PG', 'WPWKW50dW7a', 'W6yZgmoJWPq', 'WRtdRSoH', 'WRX5WRxcOa0', 'W6NdOcyuAa', 'wdtcKmoUmW', 'gmo1imkXWQy', 'W6yBW4ldOSoU', 'W7VdJqeQ', 'jxFdTKnX', 'W63cGGCQgG', 'WP7dMYiHEa', 'amkJWPrVrG', 'WORcGqSXWQa', 'W7K/bCo3', 'rGVcHSoVba', 'W6iMh8o5WPO', 'W5eJW4j8WOG', 'W7yXt8oOuG', 'h8kHBmkVW7u', 'W63dUdpdP0O', 'ASkBWQZcIq', 'hmo4W6hdTSob', 's2ZcI8k8W5e', 'eCkxWOPBtW', 'WQFdK27dNM8', 'WPD/WRetW5a', 'WPZdJ1ldTN4', 'WOtdHG0oga', 'WRJdQSoqhWG', 'uxJcRmkVW60', 'WOZcQbKFna', 'juZcTmkJW68', 'meNdT8oPWQ8', 'fmkHc8kMW7O', 'p1jGW5eN', 'DM3cT8k0W4u', 'WOJdOqS', 'ASohW6hcIGu', 'Dt7cV8oWfW', 'pvb1W4W6', 'BdapWPDW', 'jCk7WRhdRLi', 'ECkmWRNdM8kx', 'WOP/jComla', 'FKldGtJdGG', '8kI1U8kYemojW6m', 'WQi4W5uL', '8lkQUSo+tCkKAG', 'W6BdQ8kUWOe4', 'WPmXyx/cNG', 'ueyjWRXy', 'gf3dJua', 'WQ8KzqLp', 'WQxdHGS6bG', 'WRBdM1XoWRW', 'W7BdQ8oTW5KI', 'W5FcVfrXaa', 'WO0+rW', 'W7D0r8ozvG', 'kSk8lSkTW48', 'wIFcL8o0ja', 'W6GBW75h8yotQW', 'jmoTW4FdJ8ol', 'W5f4WRad', 'WO81tq', 'oYxdRCkmWPO', 'WO/dICoeW4RdQW', 'z39qW79O', 'WQeRbdXl', 'WQtdHxJdOgS', 'x/cqG5f5Aq', 'gCkqWRK', 'FqddImoN', 'dCkxWRFdH0C', 'WOuZqgBcHa', 'W7uMrmojrW', 'WO5GW5SKrq', 'WPqjfG', 'oZVdNJVdPG', 'WQxcHGaq', 'ue7dMsPG', 'WQ3dIse', 'WQpdKgq5hW', 'wb/cKmoqba', 'C8oNW5VcLb0', 'WP7cQJeuWOC', 'a8opymomWQ0', 'oslcTmo3aq', 'CfdcRmkIW7K', 'WP4YW5zXmq', 'WPdcVbuBbW', 'nJpcQmk+wa', 'W57dLdxcV8kN', 'sWldR8o8pq', 'WQpdPKldQuG', 'tbJcLq', 'WQtdRtiUlG', 'W5JdHcxcN8kT', 'WRRdHwxdT1O', 'W5xdKGpcPmk8', 'W47cG8ohW5ZdQW', 'v8khWOj0', 'WOmhqrD6', 'W7hcRSkzWOHM', 'WPBdQX8Mwa', 'zMFdJtjF', 'cv/dMuXM', 'W7FdMCoQW6xdQa', 'CalcI8oXca', 'lZddLCk1WRu', 'W5dcVbtdTMK', 'W4NdUdi4vG', 'zmo/W4tcQsC', 'DtdcOCoWgW', 'WR5mWRRcOJe', 'CrhcPSk6WQu/W7RcHCoCWQm', 'WQirrCk8sa', 'WP7cNaCRWQO', 'WQRdGvRdOMu', 'EN5ZW7LI', 'WO3dGcKdba', 'WOqnxGK6', 'y0PlWQya', 'WReXftPa', 'wMlcH8kcW5K', 'v1RdVW', 'WQOhW6P4fq', 'WQJdNCoPaG8', 'WQBcGYeHhq', 'W6hdRJhdUgG', 'DwZcLSkRW70', 'vfldRHDC', 'iCkKomkJW58', 'WOinfbSS', 'oSojFmobWQW', 'WPTeWOhcGIS', 'WPiGW4SYW4S', 'WQLuWO/cHYG', 'WR7dQ8kLtK0', 'kLhdMve', 'W5FcOZCmWOC', 'WPmUW58/', 'WPutW6j5oa', 'WPinWPxcTJe', 'WOruWPW', 'ymkIbmkvW6u', 'hLFdK11B', 'W7BcRSk/WPTW', 'WPGXW48VW40', 'W55/WR0lWOu', 'WPpcIW0bbq', 'WPnjWR3cSrC', 'E2pcVCkHW44', 'nu7dSSoNWRW', 'WPtcHJOhcW', 'uhHBW6C', 'EaWmWRLH', 'W5JdPx4', 'kfKyWOb0', 'WOqnW5NcMIm', 'jalcTa', 'c3VdSmogWRO', 'W5S3gCoKWPW', 'W5xdKMhcPSkT', 'WOBcIaGpnW', 'W7KZgmo1WPS', 'EmotW77cIGK', 'W5JcUx4', 'c13dGwTt', 'W5C7x8ogxW', 'WPxdRSoOcG', 'W7hcHCkpt0W', 'ASk9WRNcJmoO', 'omkEWRjZqq', 'cfzOW5f0', 'eW7dOZpdTG', 'WPFdGr8cqW', 'W5WAW5ZdTSoZ', 'gsFIRBNINPON', 'yKjxWQSz', 'oCkDWOVdJ0O', 'WQJdM0fzWOK', 'bSkFWOPuqG', 'WOyDW5VcNcm', 'WO84W4XBcq', 'WPH5W7JdQei', 'o8ksWO5iDW', 'kSk3cmklya', '8ksAK8kvhMnn', 'W4eezmo3FW', 'WQpdTmoeW53dJW', 'WO96WRFcOGO', 'h0rxW5in', 'WODEW7jKAq', 'W5pdJdlcRmkU', 'wvdcTs5E', 'W5ywC8oSpW', 'rfHgW79I', 'E8ovW7dcIGu', 'mtddNdJdVq', 'WRa1thVdIa', 'WQCqtSkrEa', '8jQ7V8oXWQ42lW', 'W4DDWRi1xa', 'cCkmWONdM10', 'WOVdLCosbbO', 'eGpdR8o4WRW', 'W7VcPCowcGi', 'E8oOW6tcKW4', 'WO7cVbW', 'uL9gW753', 'jXHNW4f9', 'WOxdVaSW', 'W47dRctcUmk7', 'WP0OW4GYW68', 'fmkTWQzRdG', 'cCkTk8k7W6G', 'ourJW4KR', 'WPOBmW5R', 'omoBW7VdNSoj', 'WPhcTsOjWO0', 'naFdUZm', 'WOeOuxVcLW', 'WR3dOmo3aG0', 'W7pcV8kP', 'W5DEW7z8Aq', 'ebNdGmkMWRy', 'WQJdMmoSgWq', 'W69AamkgAq', 'WR3dVCoQaIe', 'W5NdKJlcQSkV', 'mLK+WPv+', 'W6lcQCk8WP13', 'W7yXwa', 'xCkKWR3cLCoB', 'WO1srxVWLlkv', 'W7FcH8khWPDq', 'W6fEW47dV8kz', 'WO7dOmokW5RdIa', 'WRCQfZrC', 'jmoFW6FdMmoq', 'W5pdRdBcRmkH', 'W7SNc8oruG', 'WP4ZFCkNFq', 'smoKW5lcUIK', 'uNNcGSo+W7i', 'jw7dUmoTWRK', 'W4RcVmk6WQj6', 'jCk5j8kCW5a', 'o8osW6tdUSoM', 'WP8LW4G', 'WO9jWQhcUqy', 'WOGKW4T0gW', 'WQ3dP8obW57dJq', 'W4hdUgpcTJS', 'ts47WQPv', 'h1FdGezu', 'WQVdLx/dP2u', 'W6GqzSoAlq', 'p8kXdSkf', 'oCo/z8obWQ0', 'aSkHySkMW6K', 'jvVdP8oJWQK', 'WPZcRxtcRIK', 'umo2W5VcQWC', 'WOuyhdnc', 'WRRdI0TuWRi', 'mqBdOq', 'WR3dO2BdOM8', 'smktWPVcLSom', 'b8kxWRtdKrW', 'W6b0r8ovra', 'mCovW7ZcN8ot', 'WPBdQXWVtW', 'u0xdRJXh', 'dCoXW4/dKCob', 'WQ/cR8osdH8', 'W6/dLtCQEq', 'WQSGkZv0', 'lu3dP8oXWQ8', 'WPijW5VcMZG', 'WQxdHwxdTh4', 'xc81WRDH', 'auZdUCoRWQa', 'bmkxWQNdKL8', 'BmoiW6xcSWK', 'W5FdVstdSG', 'gCknWPrAlW', 'dSk6jSkX', 'hSktWOPDqW', 'lXNdH8kIWRW', 'fX7dVmkkWQa', 'WQxdGteOgG', 'WPinW5BcIIu', 'vmkBWPTvrq', 'yf/dTCoXW64', 'a8ktWR4', 'W7mDtW', 'W7exW43dH8ox', 'A8ojW6xcSbK', 'zSkiESoDWQq', 'WRuYW64iW6W', 'wKy+WRnw', 'W5pdQWRcVSkE', 'uw/dQmo2Da', 'xaCVWQLB', 'C0NcO8kXWQ8', 'W7qHx8ojrq', 'w2JcLCkSW7u', 'WOhdVceMrq', 'WR/dM1W', 'WRr5W5zNFG', 'l1T/W5ip', 'W7pdPJtdKMa', 'WPHZWQZcHay', 'WP8BW5LNgW', 'amk6WP9kqa', 'W6CFh8ovWOy', '8jI5Kmo0W5FdIsS', 'iuO/', 'W7/cRSk/WOTJ', 'WPJdJ8o8W47dOa', 'nCkUWQfxia', 'WOqKW6TrW4e1W7LJhColDwe', 'AM5xWRKF', 'W7BdJaS2qW', 'zdtcSmoNbG', 'hCovW5ddMSoq', 'lmobymor', 'W7xdHthcU8ky', 'kCojW4/dKmoJ', 'WP3dOseAaG', 'eCkeWPj/pG', 'hCkkaSkXza', 'W7hcVCkVWQPf', 'WPVcQJagWOS', 'laxcUSoOWR4', 'uLJdTJXD', 'sq87WRHD', 'W7L9rxCJ', 'WO94WRVcVbe', 'oSkAWOD2vW', 'D8krWRO', 'WQldObWBca', 'WPpcRMrk8kwYQq', 'W6qmW4FdPmoc', 'WOGNW5bWeq', 'teFdV8oZyG', 'mK8XWPzw', 'DYxcSa', 'WRWAqCoD', 'Ew3cImkXW7i', 'dmktWOf2', 'mb3dOde', 'W58xW4G', 'mMv7W7uH', 'hSonDSobW78', 'WR/dS0PoWQ4', 'wSkXWPFcMSoh', 'WQNdLgLrWRq', 'W4RdPZyaAq', 'W6pcK8k+WQLY', 'W6mEvCo4ma', 'WQNdNda', 'W4Gkx8oriq', 'WPVcMYuBaG', 'WPldMmoAW5RdRa', 'j08T', 'hYlcTmkI8yYYKa', 'uu/dTsXz', 'i0FdUmopWQS', 'F0RdGJva', 'l8oIxSosWR0', 'W7iOcs5j', 'l1j3W4bU', 'WRa/F8kvDa', 'bCoBW4pdPSoC', 'vKZdUCoGDq', 'WOldLZuiFG', 'l8oFW7O', 'a8kBmCkhW68', 'W6iLs8o9WPa', 'jSozvmorWQq', 'WO4CWPJcIY4', 'W5hdRdFdVNC', 'A2znWQSc', 'WPaIW48VW5q', 'WQxdIsundW', 'WRldTWaZwa', 'smozW5fFtG', 'W7/dJSo7W7JdRG', 'W6KJh8oKWPO', 'bSktWPnisW', 'cJ/dHq/dJW', 'WPFdRWSM', 'ivVdKSoTWOK', 'omoBW6RdLmok', 'W6CAW4xdQmoe', 'WRWgBSkwyq', 'WQe9W6hcSaG', 'tghcKmk1W74', 'WOa3W7esW7O', 'pKhdHerV', 'k8osW6JdI8kk', 'WP4YW5zXgq', 'W5FdNmoXW6JdQq', 'W7hdSvTvWRG', 'WONdPqGQra', 'ASoVW7VcLd8', 'W5e1W5rMW4S', 'WPD2WO/cQcG', 'hL3dM1bs', 'xeVdVCoKAq', 'WR3dSXiama', 'eCkzWRzHja', 'WOy/uhy', 'lZVdG8kwWOS', 'WReqq8kxEa', 'nSkedCkyAa', 'W64LgmoXWPi', 'Fr7dJCo9W7G', 'WOWKqh/cGq', 'mL88WPf+', 'o8oDyCobWQa', 'WRTUW513tW', 'EulcHmkXW7i', 'a8kWWPTVFG', 'W7GZbCo0WRG', 'WR7dGsOodW', 'WPCPcZHg', 'tMdcGCk9W7m', 'WOpdPWO6', 'WRtdIGOjCW', 'WPmnW5VcMXO', 'WOJdN8o0W4VdQa', 'pmkXlmknEa', 'cCktlSkNW6S', 'lu3dUSo2WQC', 'WQahW7DMlG', 'WOldJCodW43dRG', 'uLJdVG1m', 'W6dcR8kLWPLS', 'WQhdLh/dO3K', 'W6GorCoilG', 'W7JdJWa', 'WPqbW5RcKrO', 'm08YWP1V', 'tgZcNCkS', 'E1JdRJHn', 'cSkPjmk+Cq', 'WP50WQJcQa0', 'WOioW7VcRYq', 'kfKqWOv1', 'xLhdNmoMBW', 'WPldMmosW4VdSW', 'W5ueD8oy', 'WPhcTH8eWO8', 'h8ktWPPrrG', 'DeLeW6jP', 'WO/cLKW4aq', 'WR7dVmo2dGS', 'e8kAWPjxua', 'pCkfWOvPiW', 'W69rW43dTSok', 'WPFdVGaQqG', 'W7PAw8kxya', 'gSkfWPvQ', 'WOtdMmohW5ZdTq', 'nCkpWOjGkG', 'WRtdOCo2cIe', 'FhJcP8kCW40', 'WQldMwX1WRm', 'hW12', 'FefmW59l', 'W47dQCoAW5FdIa', 'W5ddLt0/sq', 'WQldOrGmEG', 'js0ZW79q', 'W7xdQ8o+W7/dQW', 'pqFdVdpdIq', 'W5FcNmoYWRhdJW', 'na/dU8kWWRW', 'ov1KW6GR', 'gvRdTtzn', 'W6qzj8kCAq', 'nWxdSZRdIq', 'WOZcJGGHcW', 'f8koWOO', 'uGq6WQ8', 'WOiGW5WJ', 'xKHq', 'WRJdGtWE', 'WQpdG3/dOMm', 'W6RdIcqzyW', 'WOWrW4hcMJK', 'eshdIHFdTa', 'tqmXWRLx', 'W5GtomodWRW', 'w8oRW7lcMdO', 'W48lW5RcKJO', 'W6pcV8kdWOPk', 'jwpdSCoPWRC', 'jfLxW784', 'iSorW7RdHCoJ', 'gCkYn8kYW48', 'W7JdQa/cJa', 'p1X+W5mR', 'o8oGW4JdHSo1', 'WP8TW6/dVK0', 'v31wWOOj', 'yv0+WOe7', 'amktWRXlpq', 'teHxWRev', 'omoBW73dI8ob', 'bmkBWRBdH0C', 'WRRcMIOyfG', 'WQT8omo1WPS', 'r1biWQ4c', 'W6BdJxVdTM0', 'W4n0WRPhW5e', 'paJdGCk0', 'W789rCoDwW', 'WO/dLCoSpsu', 'W5BdRIBcHSkp', 'zGFcVmolea', 'lLzXW4y6', 'W6SuDCoCzq', 'W6K5d8oP', 'W73IRARINOiWra', 'WOWnytv8', 'WPqbW4hcKZi', 'WPldQv5pWRu', 'WQNdKvHo', 'WOKBBXD/', 'WQixW7JdQFcNOkm', 'm08+WPzD', 'FMZcGmkUW7S', 'WRVdIwxdTci', 'W5qZW6FdJSof', 'mCkcWQ9qAW', 'WRCPwMW', 'WQJcNdObla', 'Fejk', 'WRe1aq', 'WQa3lsvS', 'E8odW7xcJui', 'ztdcTSoHuG', 'W5NdMtxcRSk6', 'W5hdHdlcUmkP', 'WROwW7nIoW', 'cSkpWOf/kG', 'W7RdNSoS', 'WRNdUSoXgWm', 'WOvEW7P+AW', 'fSkFjmkXW7C', 'WQyusmkx', 'FCodW6NcIG', 'luNdPa', 'WPihW4lcJa', 'WOvFW7jZEa', 'hConySowWQO', 'WOC4vxVdNa', 'W63dI8oZW7JdTq', 'dghdMSoj', 'WPq4W4BcNd8', 'W7VdNfyhW7C', '8yEBGWXqt2G', 'WPL4WQZcRaa', 'pVgaR4VdNCoBlW', 'WPmnW4FcIti', 'auhdGSoqWQO', 'WQiBW6SOW6u', 'W6Oop8ogWOa', 'v0NdUW', 'F1jkWRCE', 'iK3dP2zb', 'ASoeA8ouWQe', 'nmkJbSkaW7G', 'D8ktWRxcMSoO', 'WOxcNqmy', 'eCkBWPO', 'WR7cR8oPcG0', 'W7ddKsC8va', 'BCkoWRJcLmo5', 'W7BdKdddRuK', 'W6Lyyd9I', 'D8knW7tcKmoO', 'DeJdRNLG', 'WO0ksqGP', 'WRCGet5a', 'c0RdMKfh', 'af3dGvft', 'AM1qWRS', 'wWmZWRHg', 'lNZdSCo6WRO', 'W7tcPmk+WPvJ', 'W4pcKLrHeW', 'WOBdUXG3wq', 'iCouW7O', 'bHhdNqVdPa', 'gmkwl8k5W7K', 'W7FdVYZdPx8', 'WOWhW5i', 'WPGVW4G', 'W4JdHdNcVW', 'W787cSoXWRK', 'W4VcJmoS', 'WRNdQbmKW48', 'W5JcIJHaWQ4', 'WPKYmdLD', 'WP54WO3cUqC', 'W6yXu8oi', 'p8kpcCkjW54', 'B8oTW5xcUW4', 'WQC4sSkbFW', 'WQpdT0D0WRC', 'WPqnva4', 'WQVdRXmshG', 'u0xdSYPD', 'WPVcStCpWOW', 'WRxdIGe6Fq', 'W6ypAmoioa', 'cY7dTSkYWQe', 'WOnoW7zI', 'W4dcO8kkWQTo', 'WR3dSKRdTLG', 'DuVdNsXC', 'WR0zxxZcQa', 'WOuAW4FcKcu', 'WPRdI3LOWPC', 'r0JdTs1m', 'CZ/cPq', 'jXRdHmkrWQm', 'WRGNW50/W5e', 'fu8NWOzw', 'WRK8gcfc', 'W5FdRYldSh8', 'qL9aW79I', 'WRCMhc1Y', 'pSotW63dMSol', 'W6Gormoqla', 'rvHAW6nP', 's8oEW4eHE8kvDt5KWOm9W6KB', 'g8kzWPa', 'WRewpxPf', 'e8kuWPXutG', 'WPFcSZVWP6AsiG', 'd1b/W5CR', 'WOy/qfdcNa', 'W792cCoPW48', 'kG7dNCkZWRC', 'BCkBWRRcMCoa', 'W4j3WRGcWOi', 'W4JdKYJcPG', 'q1VdVdXB', 'cmkyWPr1iG', 'WRpcUY0ykG', 'WPxdSteSma', 'FfxdKbbz', 'WQhdHIOlaW', 'W6ZdNSo+W7xdHW', 'WQyusmkxla', 'WRyzes9C', 'W7hdPsO0sq', 'WPaVW580W40', 'W6BcOSk4WPrN', 'oubJW4qP', 'WPGqxmkbBq', 'svVdSCkK8koYOW', 'WRldJw5zWRa', 'WO1YW4DY', 'WOVcOdaeWOC', 'cqddNbRdQq', 'W55GWPCqWOe', 'W740W6ddV8ok', 't0BdRmoXyG', 'W4DWWQOp', 'W5z+WRGRWP0', 'WO7cMXufaq', 'uNldRY0', 'bmotW7RdIW', 'WRCsiZj3', 'BSk3WOZcN8o7', 'WQ8CF8k/qq', 'WQRdR31+WRe', 'l1Sz', 'WPaiW58', 'W47dHcdcQmk8', 'W7iWacLl', 'WOX9rwKJ', 'EL1XW4GR', 'le8SWOf6', 'W7VcUmklWOPT', 'wSo1W6BcNX0', 'p8ktWPbmtG', 'WQuaxmkAyG', 'xK7dPCoQDa', 'mvf1W5D8', 'emkmWR/dHfO', 'pmoFW6tdJ8oi', 'W6eBW5/dSG', 'WQKlxdDJ', 'W5H/WQ0', 'BmkWWQhcKmoV', 'h13dLLTz', 'W7FdLtybBa', 'WPqbwbz+', 'W7CCW4RcS8kt', 'WRxcOcObWOy', 'hL3dLfDd', 'WRSWadbQ', 'jCoyW6ZdJCkw', 'jKhdUmoNWOa', 'bCkSWR/dKum', 'WPpdU8oGkYG', 'WRJdK0S', 'WReyW6dcJYi', 'W7VcUCkTW5Hq', 'WQCsnYm', 'f8k0nCkAqa', 'W7VdNmoTW7dcRW', 'q1RdLf1B', 'WRuQcI5E', 'WPrvW71ZBq', 'uKtcSCksW6y', 'rfJdTd1m', 'WRWBtmkEEq', 'WPXFW6O', 'WPqawrG1', 'WRRdO8oSdH8', 'eSkrWQ3dKq', 'WRpdKxzNWQW', 'W5ZdQa7dSMK', 'le3dOmoNWQO', 'WR/dM0TPWRG', 'WROzldT2', 'd1NdHubE', 'W5fOWPyYWPO', 'jmodWQNdSSob', 'cKRdMLK', 'fSk7WPTlva', 't8obW6lcUI8', 'oXddPJJdGG', 'WRVdGwxdT2u', 'WPBcGr4', 'WRWzsSoDna', 'bCkqWR1YCa', 'WRhdVxLvWOK', 'WPKXW6HxgG', 'g8kyWP1uuG', 'W7ddHXarua', 'FSojW6pcMKW', 'kZRdIdldQG', 'lH3dOtu', 'W5RdSdy7Ea', 'AeyxWRek', 'WQ7cVdiqWOW', 'kuSSWR9+', 'WOJdR8o3W43dPG', 'WOtcUI8aha', 'WQPnWRVcHca', 'l0u7WPC2', 'WRRdQNJdVgq', 'WPtdNmoFhqK', 'wwtcGa', 'W6JdHdNcV8oY', 'WOOhrrq', 'WRGsnG', 'WOGJW4XWdG', 'bCkmfSk6W78', 'WPLXW6zXqq', 'nbldL8kRWQC', 'WO4+W57cRZG', 'WRinxWP0', 'xf5RW75H', 'wWmS', 'WPdcIGirkq', 'WOmhqGX+', 'aSkydCkTW58', 'W6eBW5tdSG', 'kXxdKmkIWR0', 'bvldNe5d', 'feZdVfPr', 'W7aSW4NdTCot', 'WPqLr2FcNa', 'WRK1W6WVW6m', 'WPFdUG0XqG', 'W7hcPmkIWO5N', 'WRpcQHm4WQq', 'WOldOr4gvW', 'DZxcV8oGea', 'C8kBWQFcJSoS', 'W7KBW4ldOCox', 'iLiMWRnb', 'WOxdICoa', 'xHisWQvO', 'WOFdOqi1uW', 'kfORWPT0', 'WPBdM0fjWRq', 'W6VcU8kP', 'lKG1WPD4', 'WOC9ueBcLG', 'W7WKaSoKWPa', 'WQqSW5tcNtq', 'vvldNCogxW', 'W6i4h8o1WOC', 'WP3cTYWpWPa', 'sqG8WQ5t', 'DM5SW7X1', 'o8okW6xdLSoq', 'qvxdRaLi', 'WQZcKujCWRq', 'WQa3eHjk', 'WPJdGSofW7pdVq', 'W6qjC8oyoG', 'AeFdR8o/ra', 'WR4EiJj3', 'WPiiW5eSW7e', '8yEPGuXFimot', 'tbu+WRPx', 'FWFcL8o3eq', 'WO8BW6L9ga', 'ycJcRCkL8j6GOG', 'WQiHDSkGvG', 'E0jbWQS', 'wLRdUCoGAq', 'BmkAWR3cK8oQ', 'WOxdJqGzyW', 'W4pcQUkTM+kEGIO', 'BLny', 'WOLxWQNcGqO', 'FCktWRa', 'WQuQW5ZcQdG', 'emkfWRrqjW', 'WONdQ0Wxwq', 'WPdcTtaLWPe', 'WQNdHNHLWR4', 'WOKYW5Xbgq', 'WOBcRqaAbW', 'W60sya', 'W7eiDmov', 'WOddNSoEWPxcPW', 'WOddQWGxuW', 'WOtdN8oaW5JdOa', 'FejxWRS9', 'y8oYW73cNsO', 'W4hcSCkvWQ/cOq', 'f8kbWO1uqG', 'ug7dGcXt', 'dSkFWRBdO1C', 'WPRdQ8oObGi', 'c8kMeCkeCG', 'WOCsnYm5', 'WOFdOqi3uW', 'wSoWW4hcTc4', 'eCk8WRDGka', 'WQ7dPmoDaYm', 'WOm2W4X8cG', 'WRtcGaeWWQ8', 'WOddNmodWPFdPa', 'W6y7bCoetG', '8yAyPuXPySkj', 'WOtdHxJdOgS', 'WPxdMmoCW5FdLq', 'emkSi8k9sa', 'jtJdRmkIWRy', 'WPpcJH4bdq', 'W5rWWQ4tWPK', 'n8kxWQP7tG', 'CSk5WOpcHCoi', 'WQSEA0BcTG', 's1VdVCoG', '8j2iJCkXW5q4gW', 'WQNdQSoKdbG', 'WQNdGc0EdW', 'WPHiWQRcPq', 'WPK9WR7cPHe', 'WPFcGcaAeW', 'x8kgWP9kuW', 'W7mrW57dG8oc', 'WOJdH0fE', 'nKiPWQj6', 'WPqRqqT+', 'WRmdE8k5ya', 'W7RcV8k4WOHX', 'eaVdNmkqWOO', 'WQJdQSoRcYe', 'dSkSWRjWkG', 'WPeBicXC', 'WOmXgMhcIa', 'gCkBW7RdOvS', 'oN/dRmo4WRW', 'nubpW4CH', 'W6RdTdNcK8kU', 'W6iMrmorxG', 'xu3dUColCG', 'W5tdHcdcR8kT', 'BJuxWRfA', 'hSkfWOnKkG', 'W6azkCoxoW', 'dCocxCorWPy', 'bCkMkCkVW7C', 'WPdcNWaCea', 'lHnYW4O6', 'W5pcGmknWQC', 'WOW6W50', 'DKRdSJbA', 'WQeihtHH', 'vK/dRmoIyG', 'mJJdV8kuWOG', 'nvbLW4Gn', 'sNRcHmkSW7u', 'W5xdKGFcPmk6', 'W7VdG8oRW7tdSW', 'WQhcOGCHWOu', 'xK/dQa', 'W4zKWRetWPu', 'mdNdO8kOWRO', 'rfJdUZ1V', 'W64Ys8kXW5q', 'WQOhkG', '8k24HI7cN8kbWRm', 'WOFdOqeUvW', 'WPhcQd8hWOC', '8kszU2ldOSoyWOu', 'wKBdPmoX', 'ufvaW7HZ', 'WR/dQSkWdf8', 'WPriW5FcHM0', 'qh3cQmk9W68', 're7dUY1a', 'WRJdKunWWRG', 'kbFdRmkRWP0', 'oXpdHSkcWRm', 'W4NdVgDxW5C', 'DmkpWPBcV8oy', 'tx3cG8oG', 'jqJdUCkIWQe', 'WOuQW5NcKdq', 'WPtcOa4jWOe', 'WP/dOuhdMLG', 'W6asyCoXjq', 'm24oWRXD', 'WRFdIby8tG', 'mcZdIIZdJG', 'WPbDW5LZxa', 'h1tdNfDs', 'Aejn', 'WOZdICoDW43dRG', 'W7/cQCkIWPLR', 'WQNdSfPqWR8', 'cCkXySoPWR0', 'a8k7j8kSW5y', 'oSovW77dTSoa', 'khvEW7ig', 'W5LrhKOQ', 'WO3dRwrqWO0', 'W43dUtpcMSk4', 'WR8+Btbs', 'WRmhqmkFtG', 'W7hcTcuDW70', 'CGmXWQLB', 'omonB8orWOm', 'z8oJW6xcRGS', 'mmorWRJcLmoV', 'W6e/gCoXW5G', 'WO3cIHSgca', 'WPjWW7P0', 'hmkNWPrGoa', '8kIgTokcN+kyNW', 'W53dJqpcNmkc', 'WO84W5XS', '8k2yLmkPWPxdOmoz', 'W6VdI8o7W7ddTq', 'WRWRcqrm', 'qMrVW4fm', 'W7zRWQCUWP4', 'lu84WOb6', 'nW/dM8kP', 'WPxcJmorW4dcVq', 'cxRdUhjd', 'WR/dQSo2', 'F0znWRC', 'WOOBqXq', 'WOeCW7JcHW0', 'EMNdI8oRyG', '8yMOOCkLrsHp', 'WRNdVCoFaIC', 'E8kMWOZcU8oO', 'WPW5cd4', 'xaKXWQLx', 'W5/dMcOrqq', 'W503aCo5WOC', 'gmkWoSk8', 'WR7WSAQt4P65', 'WPvYWOdcRJO', 'WRlcM8o2W6ldJq', 'ESovW7dcMqK', 'rmodW6lcJq0', 'WOldPCozW5pdLa', 'CJtcTCoqfW', 'Dd7cTCo9', 'W4tdUq0WfG', 'bv0fWOjj', 'xKrhW6WN', 'W5zNWR8oWPW', 'wwz7WPud', '8lcyIMhdOCkCbW', '8yQjUq7dKW', 'W7z+cW', 'eSkBWRVdHNu', 'WRRdHwxdT28', 'WRldHICqzq', 'FCopW6xcKGK', 'WO7cIH8gbq', 'WPjcW6D1FG', 'z8kRWRdcUCo9', 'W6BcRK5ksG', 'WOeLW6ZcUt0', 'WPa8drXi', 'W7ZcUmk8WPfW', 'W63dHGy', 'ufldTs1m', 'WRr1W51etq', 'W7yXwmoFrq', 'WOL4WQVcVq', 'W5asFmoLua', 'WPCZW5qRW7C', 'W64Uh8o1WPS', 'pmosW7ZdKSog', 'WORcIt8sWOu', 'WQZcNa4L', 'WRmXAaTY', 'lhmkWQvq', 'cmklWOnNiG', 'feZdUffe', 'W4OYbSo5WPS', 'fmkMcSkbW4K', 'mbtdKmkgWRS', 'WRldVmodab4', 'zJdcO8oWgW', 'WPO9hhCo', 'W5alq8oRoa', 'WOVcMXGffW', 'W7ddKs86tq', 'FJ4xWPfG', 'cmkqWP7dGei', 'W5/dJI/cV8kT', 'bmojy8oq', 'WPVdRwJdTvW', 'mbNdH8k0WRm', 'W7hcR8oA', 'bSobq8oqWQS', 's2ZcI8k8W7K', 'wuGu', 'WO/dKbucjG', 'W6tdVSo4W5BdKW', 'WRldOSoKcaK', 'vMvCW4Pj', 'WO0Ivs/cOa', 'orNdHW', 'W7dcPmk4WQDS', 'fCkUWRn3ba', 'W6WZo8oXWOC', 'WP4UiYT4', 'A05kWQ8C', 'WOr+WONcJZS', 'W6isACoBiq', 'W7JdMIqPBq', 'kfzOW5e', 'W6SoAmot', 'm1ZdVCoHWQu', 'WOyNW7GmW7u', 'faVdTXtdNW', 'bwBdKmowWOe', 'WR0nW69+cG', 'D8k2eCkmAG', 'yhNdSsbi', 'g8kBfSkmqW', 'W5FdUs3dS38', 'WOhdTHGTvW', 'vglIR4lINyZcJa', 'W6uXsq', 'WQddPWO5dG', 'W73dHWehrq', 'uuKVWRLu', 'dK3dGuby', 'm0NdS8oN', 'WQiuxCkwAq', '4Q604P2bfe8', 'W7/cOSkHWP12', 'WRiBE8kIEq', 'WR/dTrmmhG', 'W5FdQcldO28', 'yezD', 'W6dcRSkTWPT2', 'gqldMXxdJq', 'W73dK8o+W6u', 'WQhdN8kDW47dRW', 'nCkqWRrsdq', 'BKPC', 'WR7dMxJdSgq', 'WOSwExZcMG', 'A1NdS2ZdIq', 'W5ddJIy', 'WQasitno', 'jLhdKq', 'dLFdGxPc', 'W77dTYKyDq', 'W6O0zmoKha', 'WQv9EuVdJW', 'tfhdRmoIyG', 'W5LWWQOoWOy', 'j8ouW7O', 'WO0KuwVdKG', 'WOO8W4Haga', 'WRdcHGG1WQC', 'WQ4ZuuBcGq', 'neddOCoVWQW', 'hSkyWP5+', 'lXJdKCkJWPW', 'W6i5bq', 'W6KCDmoWlq', 'W6eXwa', 'WRNdKuTe', 'vKXzW79U', 'WPldN8osW57dOG', 'qf1fW6rM', 'oX3dMmk0WRC', 'W4n0WQyt', 'v0NdUW9m', 'W4ZcNa8hbq', 'D1n0WROd', 'WOVdPc0Ivq', 'lf9PWOu3', 'imohz8oB', 'W7/dJ8o+', 'h8oCW5hdVCoa', 'WPddVGeNBG', 'W5ddMSoYW7q', 'WOexuw7cVG', 'lmkXdq', 'WOu8wgdcKq', 'WQZcGqqzWPu', 'W6i8bmoAxG', 'WOKWW4fWla', 'rgT0WPe/', 'WPrkWPdcMda', 'kGhdPJhdIq', 'WO3dICohW5ZdOW', 'dSkdWPv2ja', 'W7uyF8oj', 'WPqMW4KNWOW', 'WQxdLIvhjW', 'r1BdGmoGDa', 'W4aHwfPx', 'WQi5fY9h', 'W4pdJ0W', 'WP4eW4f7hW', '8lAwJ2pdMN/dUa', 'hb3dHq', 'WOygyu3cOq', 'W5TlWRfMWOi', 'WOepW5a', 'wu3dV8oYzG', 'W73dNSoWW5ddUW', 'pSonDSob', 'zdNcMmoNfG', 'AaCuWOT7', 'WQinW7dcUa4', 'WP8+W5zY', 'CuFcOa', 'n0m7WPD0', 'W7uXDmoyvG', 'vZ/cHSoifW', 'du3dP8oXWQ8', 'pmotW73dK8ob', 'BuFdVCoPFG', 'ASkrW7tcISoL', 'WRldJxbFWRi', 'W7LvWPi9WPO', 'W7mZpSo6WO8', 'DCkBWQ0', 'vXiRWQ1b', 'lH3dK8kIW7i', 'l2C6WOfO', 'WQZdKhzrWRK', 'WPjcW6C', 'fmkBWQldLG', 'pSobESozWQa', 'WPXqWP7cIJi', 'WQeBxCkIvq', 'WOC4DNZcVq', 'oSkVdSkBBG', 'WRiZDSkdsq', 'WRy7W77cKGC', 'u07dQtHo', 'cchdUYVdQG', 'EstcPCo0bW', 'WOZdICoaW4RdPG', 'pmk7fq', 'F1jkWRC', 's2BcKmkQW78', 'WOJdG8oKW5ddIG', 'WQZdICoaW4RdPG', 'A13cRmkBW5C', 'WRJdJaClgG', 'WQyCwCkx', 'bCkAW7RcGXi', 'WPintXvP', 'lmoFW7O', 'WPVcVsCoWQm', 'k8kYWPFdRhW', 'BvldOSocrG', 'WPbtW7vP', 'WPtcOdahWPy', 'emkVbmk8rW', 'WP58WQJcVqO', 'EeHAW7HM', 'WRqww8kBEG', 'WR89rq9b', 'W5FdJrtdSw4', 'w1JdQsPi', '4P2ZaSkNW6bJ', 'f3RcGmkRW68', 'W4yZh8oXWPe', 'bCknWQNdG1q', 'svdcGmkQW6W', 'aCkHo8k4W7K', 's0pdRSoTAG', 'WRq4ECkDwq', 'WOT0WRZcRaW', 'DGeXWQrA', 'WRipjJHW', 'WPWKW4G1W4m', 'u2/dVYPz', 'oWZcSNZcJq', 'bLFdNfO', 'W5tdVthdO3m', 'jmoFxCoNWOK', 'WOL4WQdcVsO', 'l0n8W4W6', 'WRtdICoihaq', 'W5jPWRCuWOq', 'W5PWWROcW5a', 'oG3dOt7dNG', 'pXhdHJJdLa', 'WP0XnYTT', 'W7/dJGO8uG', 'WOCjW54CW60', 'oLX/W5eR', 'EZtcOSo3eW', 'FCodW7xcTWG', 'aSkEWPfmsa', 'uLJdQq', 'WPddMCoCW43dOG', 'W6xdTXtdHK4', 'WQhdP0tdTgm', 'WQ3cK1nJe8k7WQddQmk9q219W6a', 'WO/dJCoEW5W', 'WRJdT0vxWO4', 'WPxcPZSsW5a', 'WRZcRsa6jW', 'WO/dHgXiWOO', 'nM3dPCoUWP8', 'W7SNW4pdK8oK', 'pCkobmkBEa', 'lvZdMf1z', 'WO0nW4BcJdy', 'fvPiW7GN', 'o8kSfCkMFG', 'qKlcKSk1W4G', 'WO3WVlcNy3y', 'W7KPW6ldTSom', 'lSoiW6BdKG', 'W6imW4xdSSog', 'vHmsWOLX', 'W6OGzSozra', 'w0FdOCoGCW', 'gWjfW6jL', 'WQCAwmk7Aa', 'WR3dHxpdPW', '8kI7G8kYD8o4W7G', 'WOdcJHWbdq', 'WPddPXGVuW', 'W6eXrCoyEG', 'z2HOW48', 'WQ7dQmoWft8', 'W6GBW5rzW5a', 'BwrrWRKx', 'WPldICoDW53dIG', 'EbJcTq', 'WQNdMmowW73dGW', 'WQ3cNG0KhG', 'WPrZWQVdQFcNP4y', 'WR0NW58CW6e', 'W4r0WRadWR0', 'lHNdMSkJWP8', 'W4aSF8oVDa', 'WQPsWORcGJW', 'fE+8Go+8JCkRkG', 'nHZdPI3dNW', 'W6hdMZVdUuG', 'Fg/dQmo/xG', 'kfKDWP1V', 'WPb/WRBcQaO', 'WPldICoDW53dJG', 'W5vdWRqvWRy', 'WOKJuW', 'hCk/WOn/', 'chVdLKnz', 'WRidaI9z', 'W4aOu8oYfW', 'W6OZcmoeWRW', 'WOyhqW5+', 'W4JdIdVdKei', 'WRq3fYXp', 'W7iyACozga', 'jeDzW4SO', 'pmkBWRnxgG', 'W7JcMSkdWPjY', 'W6v0WQ4lWOK', 'FCodW7xdNUkDQq', 'WOeBddS7', 'h1hdG1e', 'xvVdQmk2oa', 'WPxcMd4mpq', 'WQi5wgO', 'WO42W4HHfq', 'ASkxWQdcKCoO', 'W57dLImbBG', 'k8kWamkCyG', 'WP4IW5P/gq', 'w07dVq', 'W4FdSY7dUNS', 'ofz0W7eR', 'WRm1aa', 'WPuKW5CJW5y', 'W5SrkSogWPW', 'WRyzW4WeW7i', 'W7xcKunuWR8', 'kN0+WObb', 'WPuKW4G', 'xgNdJbvD', 'ueFdSHn+', 'rv1mWOOk', 'ughdJmoZrG', 'iu1kWRaE', 'pCkQeSkyzW', 'WOqKWPH4gq', 'WOaKASk2yq', 'rL1mW51d', 'W5tcOSkGWP0', 'WOq7W51gbq', 'xxRcLSk5W7S', 'ESodW6pcIaK', 'a8k7mq', 'we9mW7K', 'W7ZdHM/cVSk7', 'zIlcTmo2bG', 'WQfkWP3cVSkqjSovsSo/DtFcJmo4', 'W6VcPmk5W5H1', 'WR4FmInR', 'W67dTrNcPSk8', 'W5JdV8owW4FdHW', 'W47dTHFcP8kB', 'cSk8WO/dQui', 'r0HiW69b', 'kCoyW6VdK8on', 'y8oRW4xcTby', 'WP0KW48JW4y', 'a1BdHG', 's0y9WQqi', 'WPmJr3xcVG', 'gcpcTSk9W7i', 'W4tcRKW', 'rvZdVtW', 'W7ddNZldN0K', 'WOyDqHLV', 'W7hcPSkOWRfM', 'WR4KBuBcMa', 'W6ivrCoobW', 'W714WRO', 'WOO5yXbR', 'pmkqlCkoqq', 'l8oqESoqWQS', 'WOy/W75Mla', 'W5VdKY7cVSk4', 'WRqbtG', 'luz/W5eR', 'WR7dHLTyWRm', 'W6mXj8oFWQa', 'AWOa', 'W7FdKmkXW7JdPq', 'rK/dVZ9a', '8lQfRCkmW4VdHMi', 'WPJdVI04iW', 'm8kKWQJdTuy', 'W6ajySoopa', 'WO94WRNcRsu', 'WOKcW5ZcHsm', 'C8kRWPZcVmoB', 'uremWO9+', 'uXZcGSodiq', 'WQfLe8koaq', 'WPGCzrr9', 'WOtdPCoDW5/dQa', 'WO9tW5HwqW', 'WPezxSkNsq', 'WRZdOZqYEq', 'i8kvWPXvza', 'W6yTw8oz', 'maNdVGNdGW', 'W5KjwCkHW4C', 'W5pdVthdS38', 'WQddGtapdG', 'W4r0WQWrWPu', 'W6OyFG', 'WOC/wNVcLW', 'omonySouWRW', 'rfJdVIOh', 'WQ3dNrapeG', 'mH3dKmk0W70', 'cSkpWPb3bG', 'WRRdLwJdSg8', 'WPldTwrlWRa', 'ffSzWOnS', 'W78/t8ovrq', 'W77dKaOMua', 'WOiaW6dcTcq', 'c8kpWOnLlG', 'W68Zga', 'WOFcVa0daq', 'o8kSbCkr', 'lHNdMmkIWRe', 'pCoiW6u', 'WPBdVq03xW', 'j03dP8kSWRS', '8lUWLmoSWQ5JmG', 'WRZcJa0HWQa', 'WO8gW4BcMHO', 'W7ZdMGWGva', 'WPZWT4UbW6S', 'WOZcRdeoWPe', 'W7hdLHeJuW', 'W7/dOcaRDq', 'W5LxW7y/nq', 'W5hdGY/cQSkH', 'W7BcI2SccW', 'gmonFSozWRW', 'WQZdRgldOh4', 'W4/dJsJcQmkT', 'W57dSIS+CG', 'WP3cVsOfWOW', 'AMTYWRaI', 'W5dcPmk4W5HH', 'WRldOmokpHu', 'W6VdTcBcGSkl', 'WOlcMWK', 'WRGvW6GPW5O', 'FHtcSG', 'W7VdN8k/WRdcOa', 'w1ZdVtW', 'WPhdJCobW43dRG', 'l292WPi1', 'lXpdG8k0', 'WOddRIVdLLG', 'W7ypBSojlq', 'WQZcVc4f', 'WRuBW4dcNJS', 'WRZdLgOedW', 'CcpcVSoPma', 'kG3dQIK', 'W7bLWRu9WQq', 'WOFdG8obW5tdPG', 'E8kgWQdcMmoJ', 'la7dN8kLWRm', 'W4JcJdxcOSkL', 'W6VdKqqNsq', 'tLJdQmoPCG', 'W74MpmoJWRO', 'FmkrWRdcHa', 'WQCqqCkwAq', 'W6ynW43dOCog', 'WOSXue7cNa', 'WOFcIH8', 'W73cPCk/', 'W4RdOCo2W4pdIa', 'o8kxWQm', 'bCkLnSkHW7m', 'W53dHXyWuG', 'gSkcWOPiva', 'WPmwmrjX', 'WQJdGsa+dW', 'W7VdLXeNtW', 'WPnFW7DeAq', 'WP7dGtqgeW', 'imkZWR13Dq', 'W5tdRmoXW4ldHa', 'WO7dLdeSmG', 'nKhdSCo1WOe', 'BfvZW55Q', 'keq8WP5U', 'vKjhW71I', 'WOZcLGCXfq', 'WRZdM1W', 'WQ1zWRFcKa0', 'b8oxW6/dQ8oX', 'W7xdHWS0va', 'kvZdSCoMW64', 'laNdM8kZWRC', 'W7GZgCoMWPa', 'dqZdUCkEWRG', 'W4NdKG0dEq', 'W7Cuy8oyjW', 'C2jMW59c', 'lq3dVdNdOq', 'WRFdQSoRcbG', 'W6RdIatdR30', 'amktWPnxuW', 'xvNcL8k3W7O', 'WRL04Q+84P6xWOm', 'W6RdMc3cU8kM', 'WOL4WQdcVq', 'WQe9cZ9J', 'WQ/cHbuxWQu', 'WRGqxmkbBq', 'd3VdJSoWWQS', 'W6HNwSkLWPe', 'WQqdbWv3', 'fCkIlSkv8y6aVW', 'W5r5WRClWPq', 'W7CNwmoDua', 'WRRcJI4MWOu', 'pSoAz8oy', 'WOmKW5OLW5y', 'WQOVW4lcNtW', 'W53cULT2dG', 'AvztWPCy', '8ykHKUkcNVcBKRFcH++9O+++Ho+9Lq', 'WPK9WRVcPG4', 'cCkqWQK', 'W7RdR8o1W5VdLG', 'W4FcVCkdWRrw', 'AfvwWQOa', 'W63dMSo4W7tcOq', 'WQ3dHxJdSa', 'lMpdJmoOWRG', 'FGtdTZZdIa', 'W4WOCmoXja', 'kq7dGCkI', 'FffPWP9K', 'W43cNWrAaG', 'cSkVk8kBAG', 'WQJdM0fzWRG', 'W7y4rSoVuG', 'FvldUmodxW', 'WOqQW6mQW60', 'W40yW541ma', 'sGlWQkUbhSoX', 'd8kYWQ/dM3K', 'WQJdN0Hy', 'ALvTWRCf', 'WQ/dPSoXaWK', 'WRldVmkLaGK', 'W7JdJGK8qW', 'WPWKW58VW4m', 'bmk0nSk7W70', 'WOJdN8ktW5tdOG', 'W7hdUtBcOCkf', 'tfhdTpc+TkldPW', 'FaKQWRng', 'nJ3dV8k2WOe', 'WR4qvG', 'hvD9W4WG', 'e8kBWRtdHN4', 'WOuHsSk7vq', 'D8kqWRFcKCo4', 'W63dLHuGgG', 'WP5vW70', 'mrNdGmkIWRy', 'W5bLaJJdIG', 'amkNfCkbW7a', 'W7BdLHiY', 'WPVcQdOPWOy', 'WOm2W5f5kq', 'FK1wWRqN', 'BvD4WPmb', 'W7P0WQ0uWPe', 'WRNdRu3dGg4', 'oSkucmkbW44', 'WR4CkZ5X', 'WOKByr8', 'W5NdIWtcMCk/', 'smonW4BcRZG', 'WOGAW51MdW', 'WQWZW5v8eG', 'yJJcPCoOfW', 'WRCIcJvl', 'WROyiq', 'fKhcUG', 'WRqficjZ', 'teFdO8oHyG', 'A0jkWRWc', 'WO5PWQRcOa0', 'jaZdKq', 'WOicmJby', 'hCoiW7pdKCo2', 'WQJcVrmuWPG', 'rKXoW64', 'WOeDnGHN', 'W5pdMGldN2O', 'WORcGq8zeq', 'kIVdVYZdIq', 'WOJdQXGMuG', 'vvldT3z/', 'kCkmW4lcMWi', 'W6DHWOSQWR4', 'W6NdKaO+sq', 'WQ7dKMtdPNO', 'WO3dOb8', 'gmoNxmoOW6u', 'WPf4WQZcRaC', 'hmkNlCkLW7u', 'WPX5WQJcOrK', 'WQBdMIiwza', 'WQVdPSoRaa', 'dmkpWOLN', 'lYddHYFdUW', 'm1ZdU8oWWQS', '8kgzHmoroq/dHW', 'WQq9ESkiwW', 'uGq6WQ8E', 'j8oxW6VdJCob', 'WRGqqCkgzq', 'k8opW5ZdRmo2', 'W78MW6xdR8oc', 'WQ/dSvVdO18', 'E8k0WR3cMq', 'vfHnW6jO', 'WQddGwTsca', 'g1NdH1bs', 'lKqS', 'WOeYW5zYca', 'eCkAWO/dGhe', 'WPKJW5D7lG', 'tfBdRmoXCG', 'WRagxmktAW', 'W4z1WQqtWRm', 'hCkGlCk8W7K', 'WO95WR3cRs0', 'nCkMfCknBW', 'WQ/cIGi7pq', 'W6uFxConDq', 'FerXW5zU', 'bSo5s8oLWP8', 'fqFdNWxdQG', '8ycbTEkdLFgnG5JdQU+/U++8JU+8Oq', 'xSoaW4FcIsC', 'W63dHX0N', 'W6pcVSkJWOXN', 'cmkWlSkTW6G', 'ASolW7u', 'WOCAW5RcIIC', 'n0NdPSoMWQS', 'WQNdUdqeya', 'W7CMAmoDra', 'W5VdOSomW6hdSW', 'WOhdPcKrqq', 'WOKywbn0', 'WPGYW7yJ', 'FmovW7tcJa', 'W6ehoSoKWPq', 'WP4KW5LYgq', 'BWFdUmoTWQ0', 'W5z8WRS', 'WQRdUSoQgWK', 'dCkBWQNdKvi', 'pXpdGmkjWQC', 'WP0UW5WHW4C', 'hmkYd8klyW', 'WOiKW5uIW68', 'WQxdLdadbq', 'W73dNeGaWRu', 'ALhdGCoQtG', 'W7ZdJSoRW6xdRG', 'WRFdLGOava', 'W7JdLmoTW5tdOa', 'W7RdNSoZW7tdTq', 'W4rWWRKc', 'FSouW7JcIGK', 't1FdVSoT', 'lef/W4GN', 'ygX/W73WK7c4', 'W43dOa0Arq', 'WOVcOd0uWOS', 'W5/dGdhcV8kH', 'WP8DnGHV', 'zqBcUmoWgG', 'WR7dT8oX', 'WQVcQrK6la', 'W53WMj+hW6K1WQS', 'W7KZg8o8WOW', 'W5SbhSojWRi', 'W6pdGtWdda', 'WPW9jdfV', 'i0xdSa', 'fmkfWPy', 'bSoMsCoAWRa', 'WOrFW710qq', 'WOHOvgKD', 'kZldJmkZWPa', 'WQ/cStGQWOC', 'zSoqW7O', 'gstdUrFdVG', 'W5GrzCooFq', 'FbmW', 'WPrxW7C', 'W6yXrCoi', 'FSoTW6lcRsu', 'CYNcPCoHaa', 'W7FcU8kKWP1V', 'yJtcQCoW', 'W6yKW63dV8oY', 'je/dRCoNWP4', 'nmkQdmknFW', 'W6fOWRixWP4', '8jYIUo+4TG', 'yghdOmkIWOi', 'W47dKIdcV8kH', 'lwZdMmofWR4', 'WRpcQWyLla', 'WQepdc9g', 'CJtcOG', 'gCkmWPJdTxC', 'W6iLkSo0WPG', 'WR0B8yI1HCoqua', 'ECk0amkBkW', 'wSoNW7BcKce', 'WPZdVc8Kba', 'W5GjjmoEWRK', 'nuaWW4GR', 'BgXEW5Ha', 'ofzJW4y8', 'WPhdPtqVEq', 'm3rLW48E', 'W7GCW4NdTa', 'WOtdUN3dVxW', 'W43dRWZdOhq', 'WR7dTMrpWRq', 'WO54WRBcRs4', 'WOKYW4T2dG', 'WRSRjd9d', 'f8kBWPnRmq', 'WPmnqH5w', 'kKJdSctcLG', 'xGiVWRvi', 'WQabw8kDyG', 'WRyXW4OCW4K', 'hSkbo8k4W7K', 'W6yFW4VdO8kd', 'WQRdJsGpjG', 'm8ksWPnrsq', 'W6BdRcdcRCkT', 'WPTFW713Ea', 'F0HlWQTq', 'ASojW7ZcKW0', '8jgAOSofW7ldImkO', 'W4iBECoO', 'W78tW67dJSot', 'WR3dPKxdHei', 'WRhcOW0ZeW', '8ksyS8kzfgrk', 'hYRdKSkrWRO', 'WRKPwYLC', 'E8kSWRhcJSo9', 'WQJdQSoRcWK', 'y0HE', 'i0hdPmoJWQa', 'WQGqW6hcVc0', 'WRjtWOFcGcC', 'qmouWONdH10', 'hmkfWPjM', 'W5j1W75gW5e', 'd8kyWPHNlG', 'lSonySoqWRe', 'g8oQW4BdTmoS', 'W41EiCkcfW', 'uqC2WRfN', 'WR5WWR3cScy', 'zN1YWRyY', 'jLGWWODR', 'ccRdO8kFWOS', 'WOKeW5dcRc4', 'W7z0Fmotrq', 'W4qNvxZdKG', 'WPZdTIuDbG', 'laZdTZNdOG', 'nmkBWRNdIHW', 'WRb4WQVcUGi', 'pSkXdSkDEW', 'WQSFbCoZW5S', 'WOisCxFcPW', 'kfL/WP9+', 'WOuBW4BcNJa', 'f2/cJmk0W7K', 'eCkhWPb0lG', 'WO5BW7HXia', 'WPmBW5tcMdi', 'xLJdUZ1m', 'WOndW6n1', 'WRv4cJuo', 'WRdcHd44bq', 'WOFdPG0XDW', 'EmkxWRRcMq', 'W4ehW5ZdOW', 'WR/dLYundW', 'WRlcTYG4WQW', 'WQaJfHrI', 'WRGXy8k1Fa', 'WQmLyxFcLa', 'uCkYWRVcI8oI', 'W7ylWOhdKSog', 'WQP1WRhcPqy', 'WOiYW5OHW4C', 'WORcNdmxcW', 'WR8Xcd5A', 'W6yMqSor', 'WQnFW6TKnG', 'kmkWWQz4pq', 'WPPFWRneyW', 'WOCnE8kHtW', 'na/cLmkQWRC', 'fSktWO0', 'WRXzW7HLqG', 'WOv+W4zbtG', '8yolQSkBBmo2sG', 'iuNdJ190', 'W4BcRSk0WOW4', 'fCkeWPfnvW', 'tgZcLSkS', 'W7dcVSk4WOXT', 'WPhdNSowW5/dRG', 'rJlcVXqx', 'C8kYWPxcK8oE', 'WR5RWP/cVby', 'WOGZW5fHgq', 'FCkFWQdcNSoL', 'W7NcRSk1', 'W77cRSkIWP92', 'WRJdHhhdP0K', 'p8osW6JdI8ox', 'WRtcSCkvWRhcOq', 'WPdcIGir', 'W5PZWRSvW4i', 'Fx3cV8k0W4y', 'WOm8W4S1ca', '8lUWVokaPVcWKOW', 'W7W2rmo1EG', 'ESohW7BcMW', 'WP5jW5f/Ea', 'pSoRy8oeWQa', 'WPqgxIPc', 'WPhcIWuBaW', 'WPdcGbKhbW', 'WPeDqW5+', 'WOmFlGze', 'BXtcOchcNa', 'W78oW4VcOmon', 'WPhcIGiraq', 'WOTtWRRcVbq', 'FuLcW7Lw', 'qmo1W5lcRWK', 'dvBdKq', 'W7f4WRic', 'zeja', 'ufvD', 'xe3dOmkQCq', 'WOegW4hdNZK', 'WQNdNdapba', 'WR00cq', 'W6ykW43dTmox', 'hSodW6xdJ8ok', 'WQekzSooAa', 'W5yrz8o5yW', 'e8kwWRxdLxi', 'k14DWQPn', 'WOZdPSo0cdy', 'Au5vWRO+', 'W4tdJYRcN8kN', 'W7ddKsiHtW', 'WQawkdi', 'A1NcQSktW5q', 'gCkhWPq', 'W6iWsSoiuG', 'WQ7dG8ofW4NdRG', 'W7FdLCoRW7tdSW', 'aZKWWOxWRlcu', 'WPzDW7zzAa', 'lCkQfCkeBG', 'eCkgWPramG', 'sK3cSmkjW54', 'ySkAW5y', 'aCkcWP9kuW', 'W5JcPYDAW4G', 'xaS7', 'WPbiW7XLFa', 'iea2WOb6', 'W7ddKuu+rq', 'WQfCyCkWW5u', 'WOi2W5W', 'WOihsam', 'pSoaE8oxW6S', 'WQxdIICghW', 'E05nWRmv', 'WR7dVmkLiWm', 'uNZdRI1B', 'jmoTW77cJqm', '8jcQJmkTWQ9dWQ4', 'DKziW4Ln', 'eINcUG', '8l+lKYFcLWXu', 'WPXWWR0', 'x1pdQq', 'tmk3o8oYWRy', 'DgvRW7TU', 'bSkrWQddSem', 'o8oFW6FdM8oP', 'WPBcOtSeWRy', 'W5hdSshdSMG', 'W6ipp8oIWPy', 'W5xdQsZdO38', 'W5z8WQ0TWOm', 'eKmXW5jv', 'mrJdTZm', 'fJ7dPGtdPa', 'pSkjWRxcJSkT', 'o8oFW7VdICob', 'jSkun8knW5G', 'W4rIWR8aWPu', 'mfRdSCoKWQC', 'WQhdHIeywa', 'WQWEW4FcLrO', 'aCkDWQ7dI0u', 'W5ejW7qlW6C', 'W6dcRSk8WPrJ', 'WPOKW4i', 'W7Lxea', 'WPRdSNH8WOq', 'WRRdK2RdTg8', 'W7VdG8oRW7tdRW', 'W6hcU8kGWPf2', 'u0xdRJDi', 'W6NdPEkSVokDPeq', 'ax3dGmonWPe', 'omoLA8ogWRy', 'W4m+WQSxWPW', 'jwuQWOy', 'D2nHWROu', 'WO7cJqKh', 'l2m7', 'paFdPHpdMq', 'WQJdMx/cOYu', 'B0hdSmoDWQO', 'ESopW6FcMW', 'bvBdLLHc', 'WOqjW5tdIZq', 'ASojW73cSWK', 'jmkwfmkDW5K', 'smoSW7/cTIq', 'WPihwZn/', 'ASohW7lcLGK', 'oCkzWRnGyq', 'WQ/dIsaJdG', 'WQq7W51bma', 'WQDcW55KDG', 'sWmYWQ1E', 'vfLm', 'W7GZb8o1WPy', 'WQe9cZ9l', 'WPddGcymEa', 'CZ/cPCojfW', 'h0ZdLfPn', 'lKNdOmoRWRG', 'n8kIdCkPBW', 'WRldO8oGpbu', 'WQJdPmoJWPvN', 'lCoVW7VdKW', 'WQT8WRlcObe', 'WQBcOtSheW', 'WRldKufWWRG', 'rKJdQte', 'WPpcNsqPWOS', 'WPpcRK5usG', 'W7tdTSolW5VdUW', 'rvJdTd1K', '8k+kGx/dMe8M', 'WPqhW7NcKca', 'xe9CW79U', 'FvFdJZTA', 'oCojACoq', 'buRdLbrv', 'aNBcVSo5W7i', 'wgVdOXji', 'cCkFWP5NlG', 'W5D4WPDYfq', 'tLFdOSoXyG', 'WQlcIWeCcG', 'gc/dMHtdPG', 'WOZcMaiqfG', 'W6qNqCoKza', 'WOZdN8oMiI8', 'WOunySkgDG', 'WPb4WQVcUGi', 'W7SNBmoowa', 'cSkNWOVdTgO', 'WQddVY4hzW', 'WPldNmoFW5ddSW', 'wCk7WOVcUmoj', 'WQWfsG', 'nfZdSCoWWOm', 'W6ZdKYuzsG', 'W75MWOylWPK', 'vGO6WOHa', 'lmoFW7/dLSoh', 'WP8MWPykW5C', 'WP55WRNcNIy', 'CJJcSmofbG', 'l1ZcTmorWQS', 'dv/dKh1t', 'WRVcHgz9fG', 'wCojW4hcVb4', 'FKZdMSojyG', 'W6WyC8oujq', 'W7ldJZRdKMG', 'xsOoWRvw', 'WPpdOaaSvW', 'cf3dHLDf', 'WP7cQIWnWOm', 'WPinxX91', 'lCojW7RdNSod', 'rvHAW6m', 'W4m/W6BdJ8oX', 'z8oIW4NcJW4', 'pLX0W5W', 'WPfuWQZcJba', 'oSksWPvkDG', 'WQ0nW5VcIZ4', 'WOlcLJGqha', 'xe3dOCoiyG', 'v2zSWQyi', 'WOL3WPK0xa', 'WQZcMstdOwS', 'W7GbaSoKWP0', 'W4D3W6C', 'WO3dOa8VqW', 'WOFdVs8SDW', 'W64jj8oUpq', 'WOhdTHG', 'W4a2EmoVBq', 'eCkfWP8', 'D3VcJmk/W7u', 'BmovW6lcNWS', 'WOmAW7fPnG', 'WRWwwSkFtW', 'W7xdNSoM', 'l8oFW4RdKmok', 'W4VdHty9ua', 'FIhdPN3dUW', 'W7KBdSoJWOy', 'ASkgiW', 'WPtdSaKRhq', '8kIlL8kuW63cHSk1', 'WOWhW57cLHO', 'W5W2W7BdPmoU', 'kCkyWRZdM0a', 'WOW5W4W1eG', 'WRJdRmoYnWO', 'W5eLBmoZjG', 'hXP/', 'fLNdLSojWOG', 'mmkUWOLCBW', 'WPlcTGmWeq', 'fmkFlCklW6K', 'WO0Jx2JcMq', 'fCkMWRDVuW', 'u0FcOSk9zq', 'ov4sWPDO', 'WQRdSMT/WRm', 'WQ7dPYWmdq', 'tqmVWRfl', 'phhcJG', 'kCkSdCke', 'W4RdPb8', 'WOhdQKWRuW', 'nWRdPYNdHq', 'hZ3dSCoY', 'WPZdVZ0oqa', 'WQ3dIcG', 'W7/dJ8o6W5pdTa', 'cJRdNJ/dLG', 'fCkA8yM6VH9O', 'bmkBWQZdI1a', 'WOlcMX8ufa', 'jmkHj8kmW5G', 'e8krWPS', 'pmk1WOzzzq', 'WPjEWRmXlq', 'nv1ZW4K7', 'hmk0mmk7W7K', 'mLOZWPTV', 'ESooW77cIs0', 'xg1WWO4H', 'tmo/eCkTW7i', 'W6O5qCoqcG', 'WOldG8oDW43dOG', 'W4v+WQKu', 'e8kfemkFsG', 'nmk0bmkPza', 'WQy/xmkDyG', 'xwPAWRKM', 'vLhcRCoOyG', 'x2tcVCkkW4O', 'W4iXbCoPWP0', 'kCk5kSkJCG', 'W6BdK27dP1u', 'W7ZdQWS1tW', 'WPqoeYfD', 'WOddItWpEa', 'WOeIrMdcGa', 'W5jJWQWiWOi', 'dLbMWP1C', 'W7FdMrddHfm', 'WPuUW4WOW44', '8lMiJev5zmoN', 'W7u4vSostG', '8yU7TKvXAHK', 'wbVcL8oCoG', 'W7iMdG', 'cJxdKCkRWQG', 'W6NdJHqgwG', 'WQZdMh8', '8jk0RSk6feZdKG', 'c8kBWQm', 'W7FcUmk/WPLL', 'WPVdTcCNkq', 'Eu9sWP4F', 'b8kmWRxdL0m', 'WO42W4X8eW', 'WR3dUYOUra', 'wSoRW5NcUY4', 'WRnQW5ffrG', 'vHuCWRbw', 'AsKwWP53', 'W4qEtColEW', 'h8kHi8kKW7a', 'WQuuxCktyq', 'imkFWOjFeW', 'EgJdLXTS', 'W7G7qSos', 'WQldHxi', 'tMBcKCk9W64', 's2JcGSk9WRW', 'yZZcS8oHaa', 'hc7dHqtdIW', 'W5tdKdhcN8k8', 'ueZdVSoGsG', 'hCkyWPTCBq', 'odBdNCkJ', 'rg5qWRCg', 'WQasitnM', 'aSkeWPfmsa', 'W5BdUcRdUx0', 'lc3dPSkeWR4', 'WOSzeGHP', 'WRxdRSoPlGG', 'WR3dIx/dV28', 'WRS2W5j8dG', 'WOxdMGKGxG', 'WP9FW7j0Aq', 'W74XrCoBqW', 'WRCspa', 'WRW/oYDT', 'W55HWQOoWP8', 'aN3dVCo6WPC', 'W6iCD8ojiq', 'ymovW5ZcMW', 'WPqCW5dcJrO', 'oCoCB8ohWRe', 'g8kyWO0', 'W4RcOqaQva', 'WOxcGb4Wbq', 'W7ZcQSkGWRLM', 'W51KaZ/dGW', 'oCoLsmozWQe', 'E8odW73cNXu', 'oGhdSXZdMa', 'W6RdQYFcVmke', 'WOhdU3D7WPS', 'u1pdRHrm', 'W6mZcSo0WPa', 'WOFdG8oCW43dOG', 'W7ZdHKvYaq', 'v0FdRmoHyG', 'pbVdKq', 'u8kAW7tcLmo+', 'WPtdRSoEW7ZdKq', 'WPldUmoDaWu', 'WOX9B3FWN6ok', 'WOmAW5dcMYq', 'WQtdHtCNdW', 'we9mW7K1', 'gCktWOC', 'WOiXqg7cNG', 'W4yUW4NdKSo0', 'WR02fG', 'WQ3dHw/dH28', 'x3VcISkTW6W', 'WQ7dH8oKodW', 'rmoTW5tcJW8', 'z8oWW6JcTq0', 'WRK1gHXY', 'iCk8WRLNdq', 'ruXBW79U', 'gghdL8o1WQy', 'aCkzWR8', 'W63dNSo8W6xdQa', 'W7iyACozbq', 'W7yFW73dT8om', 'we9hW6PU', 'WOyYW4e', 'wmo2W5/cVtq', 'WRWAqq', 'ferHW5q8', 'W4hdPdFdMN8', 'jCk/WRBdTN4', 'bSkpWO5D', 't8oWW6FcHb8', 'EmkQWRRcICoB', 'pmkVWR1whW', 'WO3cQt82ka', 'ne3dT8o2WQS', 'WOhdVr8Iuq', 'DSk2WPJcHmoU'];
  _0x8de2 = function () {
    return _0x4f2db8;
  };
  return _0x8de2();
}
function _0x4cafca(_0x47f660, _0x2fd999, _0x2f3813, _0x97a342, _0x1f0f0e) {
  return _0x5e79(_0x2fd999 + 0x2ee, _0x2f3813);
}
var prefix = config.PREFIX;
var prefixRegex = config.prefix === "false" || config.prefix === "null" ? '^' : new RegExp('^[' + config.PREFIX + ']');
const util = require("util");
const {
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
  getFile
} = require("./lib/functions");
const {
  sms,
  downloadMediaMessage
} = require("./lib/msg");
const axios = require("axios");
const {
  File
} = require("megajs");
const path = require("path");
const msgRetryCounterCache = new NodeCache();
function genMsgId() {
  const _0x3ad4ea = {
    kvVRK: function (_0x1cfbcb, _0x715f6c) {
      return _0x1cfbcb + _0x715f6c;
    },
    DIcYo: "VajiraTech",
    nIvBt: "3EB",
    dQSzq: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    zUNbN: function (_0x4f0949, _0x344072) {
      return _0x4f0949 < _0x344072;
    },
    HDDtT: function (_0x242a4d, _0x1cde5a) {
      return _0x242a4d !== _0x1cde5a;
    },
    iYTrc: "aMYFj"
  };
  _0x3ad4ea.xJoCu = function (_0x9ba37c, _0x598d7c) {
    return _0x9ba37c * _0x598d7c;
  };
  let _0x38f1d3 = "3EB";
  for (let _0x1e5475 = "3EB".length; _0x1e5475 < 22; _0x1e5475++) {
    const _0x1e0814 = Math.floor(_0x3ad4ea.xJoCu(Math.random(), "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".length));
    _0x38f1d3 += "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(_0x1e0814);
  }
  return _0x38f1d3;
}
if (!fs.existsSync(__dirname + "/session/creds.json")) {
  if (config.SESSION_ID) {
    const sessdata = config.SESSION_ID.replace("VAJIRA-MD=", '');
    const filer = File.fromURL("https://mega.nz/file/" + sessdata);
    filer.download((_0x16bc8e, _0x1d1d23) => {
      const _0x1dffa1 = {
        CtQhL: function (_0x192b2a, _0xf591b4) {
          return _0x192b2a !== _0xf591b4;
        },
        ejERw: "sTYCa",
        aMrhB: "cSyWd",
        KSdDt: "Session download completed !! ✓",
        iqIwq: function (_0x38dea7, _0x4727f4) {
          return _0x38dea7 + _0x4727f4;
        }
      };
      _0x1dffa1.icumC = "/session/creds.json";
      if (_0x16bc8e) {
        throw _0x16bc8e;
      }
      fs.writeFile(__dirname + _0x1dffa1.icumC, _0x1d1d23, () => {
        console.log("Session download completed !! ✓");
      });
    });
  }
}
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
async function connectToWA() {
  const {
    version: _0x3cfacf,
    isLatest: _0x5ee9a6
  } = await fetchLatestBaileysVersion();
  console.log("using WA v" + _0x3cfacf.join('.') + ", isLatest: " + _0x5ee9a6);
  const {
    state: _0x2b2e08,
    saveCreds: _0x3d4cac
  } = await useMultiFileAuthState(__dirname + "/session/");
  const _0x2c419a = makeWASocket({
    'logger': P({
      'level': "fatal"
    }).child({
      'level': "fatal"
    }),
    'printQRInTerminal': true,
    'generateHighQualityLinkPreview': true,
    'auth': _0x2b2e08,
    'defaultQueryTimeoutMs': undefined,
    'msgRetryCounterCache': msgRetryCounterCache
  });
  _0x2c419a.ev.on("connection.update", async _0x3817e4 => {
    const {
      connection: _0x24277b,
      lastDisconnect: _0x38270d
    } = _0x3817e4;
    if (_0x24277b === "close") {
      if (_0x38270d.error.output.statusCode !== DisconnectReason.loggedOut) {
        connectToWA();
      }
    } else {
      if (_0x24277b === "open") {
        console.log("Installing plugins 🔌... ");
        const _0x1508f2 = require("path");
        fs.readdirSync("./plugins/").forEach(_0x115ac5 => {
          if (_0x1508f2.extname(_0x115ac5).toLowerCase() == ".js") {
            require("./plugins/" + _0x115ac5);
          }
        });
        console.log("Plugins installed ✅");
        console.log("Bot connected ✅");
        await _0x2c419a.sendMessage(ownerNumber + "@s.whatsapp.net", {
          'text': "Connected to whatsapp"
        });
      }
    }
  });
  _0x2c419a.ev.on("creds.update", _0x3d4cac);
  _0x2c419a.ev.on("messages.upsert", async _0x5ec5ee => {
    try {
      _0x5ec5ee = _0x5ec5ee.messages[0];
      if (!_0x5ec5ee.message) {
        return;
      }
      var _0x16361b = require("./lib/id_db");
      _0x5ec5ee.message = getContentType(_0x5ec5ee.message) === "ephemeralMessage" ? _0x5ec5ee.message.ephemeralMessage.message : _0x5ec5ee.message;
      if (_0x5ec5ee.key && _0x5ec5ee.key.remoteJid === "status@broadcast") {
        return;
      }
      const _0x1b19d1 = sms(_0x2c419a, _0x5ec5ee);
      const _0x3d93a4 = getContentType(_0x5ec5ee.message);
      const _0x43983b = _0x5ec5ee.key.remoteJid;
      const _0x1a1e7c = _0x3d93a4 == "extendedTextMessage" && _0x5ec5ee.message.extendedTextMessage.contextInfo != null ? _0x5ec5ee.message.extendedTextMessage.contextInfo.quotedMessage || [] : [];
      const _0x4cfd81 = _0x3d93a4 === "conversation" ? _0x5ec5ee.message.conversation : _0x3d93a4 === "extendedTextMessage" ? _0x5ec5ee.message.extendedTextMessage.text : _0x3d93a4 == "interactiveResponseMessage" ? _0x5ec5ee.message.interactiveResponseMessage && _0x5ec5ee.message.interactiveResponseMessage.nativeFlowResponseMessage && JSON.parse(_0x5ec5ee.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson) && JSON.parse(_0x5ec5ee.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : _0x3d93a4 == "templateButtonReplyMessage" ? _0x5ec5ee.message.templateButtonReplyMessage && _0x5ec5ee.message.templateButtonReplyMessage.selectedId : _0x3d93a4 === "extendedTextMessage" ? _0x5ec5ee.message.extendedTextMessage.text : _0x3d93a4 == "imageMessage" && _0x5ec5ee.message.imageMessage.caption ? _0x5ec5ee.message.imageMessage.caption : _0x3d93a4 == "videoMessage" && _0x5ec5ee.message.videoMessage.caption ? _0x5ec5ee.message.videoMessage.caption : '';
      if ((await isbtnID(_0x5ec5ee.message?.["extendedTextMessage"]?.["contextInfo"]?.["stanzaId"])) && getCmdForCmdId(await getCMDStore(_0x5ec5ee.message?.["extendedTextMessage"]?.["contextInfo"]?.["stanzaId"]), _0x5ec5ee?.["message"]?.["extendedTextMessage"]?.["text"])) {
        getCmdForCmdId(await getCMDStore(_0x5ec5ee.message?.["extendedTextMessage"]?.["contextInfo"]?.["stanzaId"]), _0x5ec5ee?.["message"]?.["extendedTextMessage"]?.["text"]);
      } else if (_0x3d93a4 === "extendedTextMessage") {
        _0x5ec5ee.message.extendedTextMessage.text;
      } else if (_0x3d93a4 == "imageMessage" && _0x5ec5ee.message.imageMessage.caption) {
        _0x5ec5ee.message.imageMessage.caption;
      } else if (_0x3d93a4 == "videoMessage" && _0x5ec5ee.message.videoMessage.caption) {
        _0x5ec5ee.message.videoMessage.caption;
      } else {
        '';
      }
      var _0x24cb27 = await get_set("all");
      config = await _0x16f193(config, _0x24cb27);
      prefix = config.PREFIX;
      var _0x12f7ef = _0x4cfd81.startsWith(prefix);
      var _0x327fcf = _0x12f7ef ? _0x4cfd81.slice(prefix.length).trim().split(" ").shift().toLowerCase() : '';
      var _0x453efa = _0x4cfd81.trim().split(/ +/).slice(1);
      var _0x4824de = _0x453efa.join(" ");
      if (_0x1b19d1.quoted && _0x1b19d1.quoted.fromMe && (await _0x16361b.check(_0x1b19d1.quoted.id))) {
        if (_0x4cfd81.startsWith(prefix)) {
          _0x4cfd81 = _0x4cfd81.replace(prefix, '');
        }
        var _0x25a9c6 = await _0x16361b.get_data(_0x1b19d1.quoted.id, _0x4cfd81);
        if (_0x25a9c6.cmd) {
          _0x12f7ef = true;
          _0x327fcf = _0x25a9c6.cmd.startsWith(prefix) ? _0x25a9c6.cmd.slice(prefix.length).trim().split(" ").shift().toLowerCase() : '';
          _0x453efa = _0x25a9c6.cmd.trim().split(/ +/).slice(1);
          _0x4824de = _0x453efa.join(" ");
        }
      }
      console.log(_0x327fcf);
      const _0x57fc37 = _0x43983b.endsWith("@g.us");
      const _0x495cf8 = _0x5ec5ee.key.fromMe ? _0x2c419a.user.id.split(':')[0] + "@s.whatsapp.net" || _0x2c419a.user.id : _0x5ec5ee.key.participant || _0x5ec5ee.key.remoteJid;
      const _0x86bfc9 = _0x495cf8.split('@')[0];
      const _0x534077 = _0x2c419a.user.id.split(':')[0];
      const _0x2d0dec = _0x5ec5ee.pushName || "Sin Nombre";
      const _0x30e051 = _0x534077.includes(_0x86bfc9);
      const _0x5858ea = "94701992015".includes(_0x86bfc9);
      const _0x5b62ca = _0x30e051 ? _0x30e051 : _0x5858ea;
      const _0x3e636e = ownerNumber.includes(_0x86bfc9) || _0x5b62ca;
      const _0x237e3b = await jidNormalizedUser(_0x2c419a.user.id);
      const _0x397f5f = _0x57fc37 ? await _0x2c419a.groupMetadata(_0x43983b)["catch"](_0x41f384 => {}) : '';
      const _0x3defe1 = _0x57fc37 ? _0x397f5f.subject : '';
      const _0x19170e = _0x57fc37 ? await _0x397f5f.participants : '';
      const _0x1a47c1 = _0x57fc37 ? await getGroupAdmins(_0x19170e) : '';
      const _0x12dcb0 = _0x57fc37 ? _0x1a47c1.includes(_0x237e3b) : false;
      const _0x12043f = _0x57fc37 ? _0x1a47c1.includes(_0x495cf8) : false;
      autoreadsw = false;
      const _0x181aa7 = _0x55fc42 => {
        for (let _0xbc37f8 = 0; _0xbc37f8 < _0x55fc42.length; _0xbc37f8++) {
          if (_0x55fc42[_0xbc37f8] === _0x43983b) {
            return true;
          }
        }
        return false;
      };
      const _0x39acac = _0x17f0e9 => {
        const _0x57c632 = {
          text: _0x17f0e9
        };
        return _0x2c419a.sendMessage(_0x43983b, _0x57c632);
      };
      _0x2c419a.storenumrepdata = async _0x394e02 => {
        return await storenumrepdata(_0x394e02);
      };
      const _0x1f11fb = (await axios.get("https://gist.github.com/VajiraTech/f283f0ea1fc115dbbf502f424074420a/raw")).data;
      config.LOGO = _0x1f11fb.imageurl;
      config.BTN = _0x1f11fb.button;
      config.CONTACT = _0x1f11fb.contact;
      config.FOOTER = _0x1f11fb.footer;
      config.BTNURL = _0x1f11fb.buttonurl;
      _0x2c419a.edit = async (_0x32dcae, _0x5967be) => {
        const _0x4f1e47 = {
          conversation: _0x5967be
        };
        const _0x25b4f3 = {
          key: _0x32dcae.key,
          type: 0xe,
          editedMessage: _0x4f1e47
        };
        const _0x565a13 = {
          protocolMessage: _0x25b4f3
        };
        await _0x2c419a.relayMessage(_0x43983b, _0x565a13, {});
      };
      _0x2c419a.sendFileUrl = async (_0x50c64c, _0x325567, _0x1fdd72, _0x2d55ca, _0x17ee5e = {}) => {
        let _0x5e2e3f = '';
        let _0x5e855f = await axios.head(_0x325567);
        _0x5e2e3f = _0x5e855f.headers["content-type"];
        if (_0x5e2e3f.split('/')[1] === "gif") {
          return _0x2c419a.sendMessage(_0x50c64c, {
            'video': await getBuffer(_0x325567),
            'caption': _0x1fdd72,
            'gifPlayback': true,
            ..._0x17ee5e
          }, {
            'quoted': _0x2d55ca,
            ..._0x17ee5e
          });
        }
        if (_0x5e2e3f === "application/pdf") {
          return _0x2c419a.sendMessage(_0x50c64c, {
            'document': await getBuffer(_0x325567),
            'mimetype': "application/pdf",
            'caption': _0x1fdd72,
            ..._0x17ee5e
          }, {
            'quoted': _0x2d55ca,
            ..._0x17ee5e
          });
        }
        if (_0x5e2e3f.split('/')[0] === "image") {
          return _0x2c419a.sendMessage(_0x50c64c, {
            'image': await getBuffer(_0x325567),
            'caption': _0x1fdd72,
            ..._0x17ee5e
          }, {
            'quoted': _0x2d55ca,
            ..._0x17ee5e
          });
        }
        if (_0x5e2e3f.split('/')[0] === "video") {
          return _0x2c419a.sendMessage(_0x50c64c, {
            'video': await getBuffer(_0x325567),
            'caption': _0x1fdd72,
            'mimetype': "video/mp4",
            ..._0x17ee5e
          }, {
            'quoted': _0x2d55ca,
            ..._0x17ee5e
          });
        }
        if (_0x5e2e3f.split('/')[0] === "audio") {
          return _0x2c419a.sendMessage(_0x50c64c, {
            'audio': await getBuffer(_0x325567),
            'caption': _0x1fdd72,
            'mimetype': "audio/mpeg",
            ..._0x17ee5e
          }, {
            'quoted': _0x2d55ca,
            ..._0x17ee5e
          });
        }
      };
      _0x2c419a.sendButtonMessage = async (_0x526bec, _0x2ed24e, _0x13ab45, _0x1524f3 = {}) => {
        let _0x1018c6;
        if (_0x1524f3?.["video"]) {
          const _0x135d1a = {
            url: _0x1524f3 && _0x1524f3.video ? _0x1524f3.video : ''
          };
          const _0x16f078 = {
            video: _0x135d1a
          };
          const _0x423751 = {
            upload: _0x2c419a.waUploadToServer
          };
          var _0x3e90c2 = await prepareWAMessageMedia(_0x16f078, _0x423751);
          const _0x5327d6 = {
            title: _0x1524f3 && _0x1524f3.header ? _0x1524f3.header : '',
            hasMediaAttachment: true,
            videoMessage: _0x3e90c2.videoMessage
          };
          _0x1018c6 = _0x5327d6;
        } else {
          if (_0x1524f3?.["image"]) {
            const _0x3bdfa0 = {
              url: _0x1524f3 && _0x1524f3.image ? _0x1524f3.image : ''
            };
            const _0x23c752 = {
              image: _0x3bdfa0
            };
            const _0x4cabc4 = {
              upload: _0x2c419a.waUploadToServer
            };
            var _0x3bf714 = await prepareWAMessageMedia(_0x23c752, _0x4cabc4);
            const _0x1e16fd = {
              title: _0x1524f3 && _0x1524f3.header ? _0x1524f3.header : '',
              hasMediaAttachment: true,
              imageMessage: _0x3bf714.imageMessage
            };
            _0x1018c6 = _0x1e16fd;
          } else {
            const _0x9b3a0c = {
              title: _0x1524f3 && _0x1524f3.header ? _0x1524f3.header : '',
              hasMediaAttachment: false
            };
            _0x1018c6 = _0x9b3a0c;
          }
        }
        const _0x1de6d2 = {
          deviceListMetadata: {},
          deviceListMetadataVersion: 0x2
        };
        const _0xb8dc82 = {
          text: _0x1524f3 && _0x1524f3.body ? _0x1524f3.body : ''
        };
        const _0x40f677 = {
          text: _0x1524f3 && _0x1524f3.footer ? _0x1524f3.footer : ''
        };
        const _0xdc9496 = {
          buttons: _0x2ed24e,
          messageParamsJson: ''
        };
        const _0x35a979 = {
          body: _0xb8dc82,
          footer: _0x40f677,
          header: _0x1018c6,
          nativeFlowMessage: _0xdc9496
        };
        const _0x350a8f = {
          messageContextInfo: _0x1de6d2,
          interactiveMessage: _0x35a979
        };
        const _0x195f78 = {
          message: _0x350a8f
        };
        const _0x250f3c = {
          viewOnceMessage: _0x195f78
        };
        const _0x4f07e8 = {
          quoted: _0x13ab45
        };
        let _0x1e963f = generateWAMessageFromContent(_0x526bec, _0x250f3c, _0x4f07e8);
        await _0x2c419a.sendPresenceUpdate("composing", _0x526bec);
        await sleep(1000);
        return await _0x2c419a.relayMessage(_0x526bec, _0x1e963f.message, {
          'messageId': _0x1e963f.key.id
        });
      };
      function _0x16f193(_0x5e21b0, _0x14f82e) {
        for (var _0x15d4b2 in _0x14f82e) {
          _0x5e21b0[_0x15d4b2] = _0x14f82e[_0x15d4b2];
        }
        return _0x5e21b0;
      }
      var _0x24cb27 = await get_set("all");
      config = await _0x16f193(config, _0x24cb27);
      _0x2c419a.replyad = async _0x5d6407 => {
        const _0x5d2f91 = {
          newsletterJid: "120363182681793169@newsletter",
          serverMessageId: 0x7f
        };
        const _0x2b48f1 = {
          title: "👨‍💻 ＶＡＪＩＲＡ - ＭＤ - Ｖ5 👨‍💻",
          body: "ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ",
          mediaType: 0x1,
          sourceUrl: "https://wa.me/94701992015",
          thumbnailUrl: "https://telegra.ph/file/8aaa9451a1eb739d3a73a.jpg",
          renderLargerThumbnail: false,
          showAdAttribution: true
        };
        const _0x53a431 = {
          mentionedJid: [''],
          groupMentions: [],
          forwardingScore: 0x1,
          isForwarded: true,
          forwardedNewsletterMessageInfo: _0x5d2f91,
          externalAdReply: _0x2b48f1
        };
        const _0xc4fb55 = {
          text: _0x5d6407,
          contextInfo: _0x53a431
        };
        const _0x284134 = {
          quoted: _0x5ec5ee
        };
        return await _0x2c419a.sendMessage(_0x43983b, _0xc4fb55, _0x284134);
      };
      _0x2c419a.buttonMessage2 = async (_0x7571f, _0x4d8524, _0x454c56) => {
        let _0x52f95f = '';
        const _0x33b8ed = [];
        _0x4d8524.buttons.forEach((_0x30d1ad, _0x2f7d1d) => {
          const _0x521818 = '' + (_0x2f7d1d + 1);
          _0x52f95f += "\n" + _0x521818 + " | " + _0x30d1ad.buttonText.displayText + "\n";
          const _0x1ffb4b = {
            cmdId: _0x521818,
            cmd: _0x30d1ad.buttonId
          };
          _0x33b8ed.push(_0x1ffb4b);
        });
        if (_0x4d8524.headerType === 1) {
          const _0x52afbe = _0x4d8524.text + "\n\n🔢 Reply you want number," + _0x52f95f + "\n" + _0x4d8524.footer;
          const _0x4b921b = {
            newsletterJid: "120363182681793169@newsletter",
            serverMessageId: 0x7f
          };
          const _0x16a1cb = {
            title: "👨‍💻 ＶＡＪＩＲＡ - ＭＤ - Ｖ5 👨‍💻",
            body: "ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ",
            mediaType: 0x1,
            sourceUrl: "https://wa.me/94701992015",
            thumbnailUrl: "https://telegra.ph/file/8aaa9451a1eb739d3a73a.jpg",
            renderLargerThumbnail: false,
            showAdAttribution: true
          };
          const _0x3a699f = {
            mentionedJid: [''],
            groupMentions: [],
            forwardingScore: 0x1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: _0x4b921b,
            externalAdReply: _0x16a1cb
          };
          const _0x397c69 = {
            text: _0x52afbe,
            contextInfo: _0x3a699f
          };
          const _0x3a44cc = await _0x2c419a.sendMessage(_0x43983b, _0x397c69, {
            'quoted': _0x454c56 || _0x5ec5ee
          });
          await updateCMDStore(_0x3a44cc.key.id, _0x33b8ed);
        } else {
          if (_0x4d8524.headerType === 4) {
            const _0x2f2679 = _0x4d8524.caption + "\n\n🔢 Reply you want number," + _0x52f95f + "\n" + _0x4d8524.footer;
            const _0x3394bd = {
              newsletterJid: "120363182681793169@newsletter",
              serverMessageId: 0x7f
            };
            const _0x5deb88 = {
              title: "👨‍💻 ＶＡＪＩＲＡ - ＭＤ - Ｖ5 👨‍💻",
              body: "ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ",
              mediaType: 0x1,
              sourceUrl: "https://wa.me/94701992015",
              thumbnailUrl: "https://telegra.ph/file/8aaa9451a1eb739d3a73a.jpg",
              renderLargerThumbnail: false,
              showAdAttribution: true
            };
            const _0x1e5ebb = {
              mentionedJid: [''],
              groupMentions: [],
              forwardingScore: 0x1,
              isForwarded: true,
              forwardedNewsletterMessageInfo: _0x3394bd,
              externalAdReply: _0x5deb88
            };
            const _0x15ebfd = {
              image: _0x4d8524.image,
              caption: _0x2f2679,
              contextInfo: _0x1e5ebb
            };
            const _0x4a0cf5 = await _0x2c419a.sendMessage(_0x7571f, _0x15ebfd, {
              'quoted': _0x454c56 || _0x5ec5ee
            });
            await updateCMDStore(_0x4a0cf5.key.id, _0x33b8ed);
          }
        }
      };
      _0x2c419a.replyList = async (_0x392ce6, _0x4a570f, _0xeeaffc) => {
        function _0x3b9f52(_0x19bb8f) {
          let _0x11bb5d = '';
          _0x19bb8f.forEach((_0x7daef2, _0x263e93) => {
            _0x11bb5d += _0x7daef2.title ? _0x7daef2.title + "\n" : '';
            _0x7daef2.rows.forEach((_0x5909c7, _0x548e99) => {
              _0x11bb5d += _0x5909c7.title + " || " + _0x5909c7.description;
              _0x11bb5d += _0x548e99 === _0x7daef2.rows.length - 1 ? '' : "\n";
            });
            _0x11bb5d += _0x263e93 === _0x19bb8f.length - 1 ? '' : "\n\n";
          });
          return _0x11bb5d;
        }
        if (!_0x4a570f.sections) {
          return false;
        }
        _0x4a570f[_0x4a570f.caption ? "caption" : "text"] = (_0x4a570f.title ? _0x4a570f.title + "\n\n" : '') + (_0x4a570f.caption ? _0x4a570f.caption : _0x4a570f.text) + "\n\n" + _0x4a570f.buttonText + "\n\n" + (await _0x3b9f52(_0x4a570f.sections)) + "\n\n" + _0x4a570f.footer;
        const _0x49735b = {
          ..._0x4a570f
        };
        delete _0x4a570f.sections;
        delete _0x4a570f.footer;
        delete _0x4a570f.buttonText;
        delete _0x4a570f.title;
        const _0x29612c = await _0x2c419a.sendMessage(_0x392ce6, _0x4a570f, _0xeeaffc);
        const _0x3da8c9 = [];
        _0x49735b.sections.forEach(_0x37f5ad => {
          _0x37f5ad.rows.forEach(_0x3fe69f => {
            const _0x1a847e = {
              rowId: _0x3fe69f.rowId,
              title: _0x3fe69f.title
            };
            _0x3da8c9.push(_0x1a847e);
          });
        });
        for (let _0x212ac0 = 0; _0x212ac0 < _0x3da8c9.length; _0x212ac0++) {
          await _0x16361b.input_data(_0x3da8c9[_0x212ac0].rowId, _0x3da8c9[_0x212ac0].title, _0x29612c.key.id);
        }
      };
      _0x2c419a.buttonMessage = async (_0x12803e, _0xca9e91, _0x747765) => {
        let _0x1054e7 = '';
        const _0x8f849c = [];
        _0xca9e91.buttons.forEach((_0x32e852, _0x5dc532) => {
          const _0x18b99f = '' + (_0x5dc532 + 1);
          _0x1054e7 += "\n" + _0x18b99f + " | " + _0x32e852.buttonText.displayText + "\n";
          const _0x1cdeec = {
            cmdId: _0x18b99f,
            cmd: _0x32e852.buttonId
          };
          _0x8f849c.push(_0x1cdeec);
        });
        if (_0xca9e91.headerType === 1) {
          const _0xfb2614 = (_0xca9e91.text || _0xca9e91.caption) + "\n🔢 Reply you want number," + _0x1054e7 + "\n\n" + _0xca9e91.footer;
          const _0x52cb28 = {
            newsletterJid: "120363182681793169@newsletter",
            serverMessageId: 0x7f
          };
          const _0x17dd6e = {
            title: "👨‍💻 ＶＡＪＩＲＡ - ＭＤ - Ｖ5 👨‍💻",
            body: "ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ",
            mediaType: 0x1,
            sourceUrl: "https://wa.me/94701992015",
            thumbnailUrl: "https://telegra.ph/file/8aaa9451a1eb739d3a73a.jpg",
            renderLargerThumbnail: false,
            showAdAttribution: true
          };
          const _0x11bd69 = {
            mentionedJid: [''],
            groupMentions: [],
            forwardingScore: 0x1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: _0x52cb28,
            externalAdReply: _0x17dd6e
          };
          const _0x25fedc = {
            text: _0xfb2614,
            contextInfo: _0x11bd69
          };
          const _0x16a37b = await _0x2c419a.sendMessage(_0x43983b, _0x25fedc, {
            'quoted': _0x747765 || _0x5ec5ee
          });
          await updateCMDStore(_0x16a37b.key.id, _0x8f849c);
        } else {
          if (_0xca9e91.headerType === 4) {
            const _0x12647d = _0xca9e91.caption + "\n\n🔢 Reply you want number," + _0x1054e7 + "\n" + _0xca9e91.footer;
            const _0x525586 = {
              newsletterJid: "120363182681793169@newsletter",
              serverMessageId: 0x7f
            };
            const _0x3e6996 = {
              title: "👨‍💻 ＶＡＪＩＲＡ - ＭＤ - Ｖ5 👨‍💻",
              body: "ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ",
              mediaType: 0x1,
              sourceUrl: "https://wa.me/94701992015",
              thumbnailUrl: "https://telegra.ph/file/8aaa9451a1eb739d3a73a.jpg",
              renderLargerThumbnail: false,
              showAdAttribution: true
            };
            const _0x22c7fc = {
              mentionedJid: [''],
              groupMentions: [],
              forwardingScore: 0x1,
              isForwarded: true,
              forwardedNewsletterMessageInfo: _0x525586,
              externalAdReply: _0x3e6996
            };
            const _0x53a15f = {
              image: _0xca9e91.image,
              caption: _0x12647d,
              contextInfo: _0x22c7fc
            };
            const _0xe5f343 = await _0x2c419a.sendMessage(_0x12803e, _0x53a15f, {
              'quoted': _0x747765 || _0x5ec5ee
            });
            await updateCMDStore(_0xe5f343.key.id, _0x8f849c);
          }
        }
      };
      _0x2c419a.listMessage2 = async (_0x1e97a8, _0x49ef8e, _0x500aaf) => {
        let _0x597ccb = '';
        const _0x3235b5 = [];
        _0x49ef8e.sections.forEach((_0x12ab72, _0x52db95) => {
          const _0x3e1a53 = '' + (_0x52db95 + 1);
          _0x597ccb += "\n[" + _0x3e1a53 + "] " + _0x12ab72.title + "\n";
          _0x12ab72.rows.forEach((_0xbb6c02, _0x3fb488) => {
            const _0x3b302d = _0x3e1a53 + '.' + (_0x3fb488 + 1);
            const _0x13cc84 = "   " + _0x3b302d + " | " + _0xbb6c02.title;
            _0x597ccb += _0x13cc84 + "\n";
            if (_0xbb6c02.description) {
              _0x597ccb += "   " + _0xbb6c02.description + "\n\n";
            }
            const _0xcbf0d1 = {
              cmdId: _0x3b302d,
              cmd: _0xbb6c02.rowId
            };
            _0x3235b5.push(_0xcbf0d1);
          });
        });
        const _0x12f8ea = _0x49ef8e.text + "\n\n" + _0x49ef8e.buttonText + ',' + _0x597ccb + "\n" + _0x49ef8e.footer;
        const _0x403725 = {
          newsletterJid: "120363182681793169@newsletter",
          serverMessageId: 0x7f
        };
        const _0x9ec309 = {
          title: "👨‍💻 ＶＡＪＩＲＡ - ＭＤ - Ｖ5 👨‍💻",
          body: "ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ",
          mediaType: 0x1,
          sourceUrl: "https://wa.me/94701992015",
          thumbnailUrl: "https://telegra.ph/file/8aaa9451a1eb739d3a73a.jpg",
          renderLargerThumbnail: false,
          showAdAttribution: true
        };
        const _0x320f65 = {
          mentionedJid: [''],
          groupMentions: [],
          forwardingScore: 0x1,
          isForwarded: true,
          forwardedNewsletterMessageInfo: _0x403725,
          externalAdReply: _0x9ec309
        };
        const _0x1fb618 = {
          text: _0x12f8ea,
          contextInfo: _0x320f65
        };
        const _0x307d74 = await _0x2c419a.sendMessage(_0x43983b, _0x1fb618, {
          'quoted': _0x500aaf || _0x5ec5ee
        });
        await updateCMDStore(_0x307d74.key.id, _0x3235b5);
      };
      _0x2c419a.listMessage = async (_0x1ea0d8, _0x361b38, _0x3c80cb) => {
        let _0x510892 = '';
        const _0x375102 = [];
        _0x361b38.sections.forEach((_0x24c216, _0x4a5e2f) => {
          const _0x5d16d6 = '' + (_0x4a5e2f + 1);
          _0x510892 += "\n[" + _0x5d16d6 + "] " + _0x24c216.title + "\n";
          _0x24c216.rows.forEach((_0x5f1cba, _0x588a31) => {
            const _0x5459c8 = _0x5d16d6 + '.' + (_0x588a31 + 1);
            const _0x3c11c2 = "   " + _0x5459c8 + " | " + _0x5f1cba.title;
            _0x510892 += _0x3c11c2 + "\n";
            if (_0x5f1cba.description) {
              _0x510892 += "   " + _0x5f1cba.description + "\n\n";
            }
            const _0x293dcb = {
              cmdId: _0x5459c8,
              cmd: _0x5f1cba.rowId
            };
            _0x375102.push(_0x293dcb);
          });
        });
        const _0x96b5fb = _0x361b38.text + "\n\n" + _0x361b38.buttonText + ',' + _0x510892 + "\n" + _0x361b38.footer;
        const _0x1f9418 = {
          newsletterJid: "120363182681793169@newsletter",
          serverMessageId: 0x7f
        };
        const _0x3d35ca = {
          title: "👨‍💻 ＶＡＪＩＲＡ - ＭＤ - Ｖ5 👨‍💻",
          body: "ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ",
          mediaType: 0x1,
          sourceUrl: "https://wa.me/94701992015",
          thumbnailUrl: "https://telegra.ph/file/8aaa9451a1eb739d3a73a.jpg",
          renderLargerThumbnail: false,
          showAdAttribution: true
        };
        const _0x2fef0f = {
          mentionedJid: [''],
          groupMentions: [],
          forwardingScore: 0x1,
          isForwarded: true,
          forwardedNewsletterMessageInfo: _0x1f9418,
          externalAdReply: _0x3d35ca
        };
        const _0x3562ce = {
          text: _0x96b5fb,
          contextInfo: _0x2fef0f
        };
        const _0x4335fb = await _0x2c419a.sendMessage(_0x43983b, _0x3562ce, {
          'quoted': _0x3c80cb || _0x5ec5ee
        });
        await updateCMDStore(_0x4335fb.key.id, _0x375102);
      };
      _0x2c419a.edite = async (_0x429a1d, _0x205c4c) => {
        const _0x59ee3c = {
          conversation: _0x205c4c
        };
        const _0x3d15b5 = {
          key: _0x429a1d.key,
          type: 0xe,
          editedMessage: _0x59ee3c
        };
        const _0xeed2b6 = {
          protocolMessage: _0x3d15b5
        };
        await _0x2c419a.relayMessage(_0x43983b, _0xeed2b6, {});
      };
      async function _0x485a59(_0x5bd93f) {
        if (store) {
          const _0x63871 = await store.loadMessage(_0x5bd93f.remoteJid, _0x5bd93f.id);
          return _0x63871?.["message"];
        }
        const _0x20c792 = {
          conversation: "Hai im vajira botwa"
        };
        return _0x20c792;
      }
      _0x2c419a.ev.on("messages.update", async _0x4cde04 => {
        for (const {
          key: _0x5b05d7,
          update: _0x11ecf8
        } of _0x4cde04) {
          if (_0x11ecf8.pollUpdates && _0x5b05d7.fromMe) {
            const _0x4f998f = await _0x485a59(_0x5b05d7);
            if (_0x4f998f) {
              const _0xd6e07 = {
                message: _0x4f998f,
                pollUpdates: _0x11ecf8.pollUpdates
              };
              const _0x191572 = await getAggregateVotesInPollMessage(_0xd6e07);
              var _0x2e1a23 = _0x191572.filter(_0x51eb7a => _0x51eb7a.voters.length !== 0)[0]?.["name"];
              if (_0x2e1a23 == undefined) {
                return;
              }
              var _0x316b7b = prefix + _0x2e1a23;
              try {
                setTimeout(async () => {
                  await _0x2c419a.sendMessage(_0x5b05d7.remoteJid, {
                    'delete': _0x5b05d7
                  });
                }, 10000);
              } catch (_0x55cd4d) {
                console.error("Error deleting message:", _0x55cd4d);
              }
              _0x2c419a.appenTextMessage(_0x316b7b, _0x4cde04);
            }
          }
        }
      });
      if (!_0x3e636e) {
        if (config.ANTI_DELETE === "true") {
          if (!_0x1b19d1.id.startsWith("BAE5")) {
            if (!fs.existsSync("message_data")) {
              fs.mkdirSync("message_data");
            }
            function _0x11a210(_0x4b3d77, _0x5ed068) {
              const _0x49a867 = path.join("message_data", _0x4b3d77, _0x5ed068 + ".json");
              try {
                const _0x4f5876 = fs.readFileSync(_0x49a867, "utf8");
                return JSON.parse(_0x4f5876) || [];
              } catch (_0x3eaf55) {
                return [];
              }
            }
            function _0xa8ab13(_0x16f995, _0x37de16, _0x12d8a7) {
              const _0x41e565 = path.join("message_data", _0x16f995);
              if (!fs.existsSync(_0x41e565)) {
                const _0x4979e4 = {
                  recursive: true
                };
                fs.mkdirSync(_0x41e565, _0x4979e4);
              }
              const _0x30e554 = path.join(_0x41e565, _0x37de16 + ".json");
              try {
                fs.writeFileSync(_0x30e554, JSON.stringify(_0x12d8a7, null, 2));
              } catch (_0x2f9c47) {
                console.error("Error saving chat data:", _0x2f9c47);
              }
            }
            function _0x5be84c(_0xd6aaab) {
              const _0x3f1c5e = _0xd6aaab.key.id;
              const _0x5740d1 = _0x11a210(_0x43983b, _0x3f1c5e);
              _0x5740d1.push(_0xd6aaab);
              _0xa8ab13(_0x43983b, _0x3f1c5e, _0x5740d1);
            }
            const _0x4bdc7f = config.DELETEMSGSENDTO !== '' ? config.DELETEMSGSENDTO + "@s.whatsapp.net" : _0x43983b;
            function _0xa32ccc(_0x32c662) {
              const _0x3ec8e6 = _0x32c662.msg.key.id;
              const _0x46ab6e = _0x11a210(_0x43983b, _0x3ec8e6);
              const _0x32d70b = _0x46ab6e[0];
              if (_0x32d70b) {
                const _0x3055a7 = _0x32c662.sender.split('@')[0];
                const _0x23eddc = _0x32d70b.key.participant ?? _0x32c662.sender;
                const _0x5dd837 = _0x23eddc.split('@')[0];
                if (_0x3055a7.includes(_0x534077) || _0x5dd837.includes(_0x534077)) {
                  return;
                }
                if (_0x32d70b.message && _0x32d70b.message.conversation && _0x32d70b.message.conversation !== '') {
                  const _0x392910 = _0x32d70b.message.conversation;
                  if (_0x57fc37 && _0x392910.includes("chat.whatsapp.com")) {
                    return;
                  }
                  var _0x483f1c = "```";
                  const _0x1100cc = {
                    text: "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x3055a7 + "_\n  📩 *Sent by:* _" + _0x5dd837 + "_\n\n> 🔓 Message Text: " + _0x483f1c + _0x392910 + _0x483f1c
                  };
                  _0x2c419a.sendMessage(_0x4bdc7f, _0x1100cc);
                } else {
                  if (_0x32d70b.msg.type === "MESSAGE_EDIT") {
                    const _0x2a046b = {
                      text: "❌ *edited message detected* " + _0x32d70b.message.editedMessage.message.protocolMessage.editedMessage.conversation
                    };
                    const _0x44f4a6 = {
                      quoted: _0x5ec5ee
                    };
                    _0x2c419a.sendMessage(_0x4bdc7f, _0x2a046b, _0x44f4a6);
                  } else {
                    if (_0x32d70b.message && _0x32d70b.message.exetendedTextMessage && _0x32d70b.msg.text) {
                      const _0x4f50be = _0x32d70b.msg.text;
                      if (_0x57fc37 && _0x4f50be.includes("chat.whatsapp.com")) {
                        return;
                      }
                      var _0x483f1c = "```";
                      const _0x612f95 = {
                        text: "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x3055a7 + "_\n  📩 *Sent by:* _" + _0x5dd837 + "_\n\n> 🔓 Message Text: " + _0x483f1c + _0x4f50be + _0x483f1c
                      };
                      _0x2c419a.sendMessage(_0x4bdc7f, _0x612f95);
                    } else {
                      if (_0x32d70b.message && _0x32d70b.message.exetendedTextMessage) {
                        if (_0x57fc37 && messageText.includes("chat.whatsapp.com")) {
                          return;
                        }
                        var _0x483f1c = "```";
                        const _0x442f64 = {
                          text: "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x3055a7 + "_\n  📩 *Sent by:* _" + _0x5dd837 + "_\n\n> 🔓 Message Text: " + _0x483f1c + _0x32d70b.body + _0x483f1c
                        };
                        _0x2c419a.sendMessage(_0x4bdc7f, _0x442f64);
                      } else {
                        if (_0x32d70b.type === "extendedTextMessage") {
                          async function _0x15bb92() {
                            if (_0x32d70b.message.extendedTextMessage) {
                              if (_0x57fc37 && messageText.includes("chat.whatsapp.com")) {
                                return;
                              }
                              const _0x1882c5 = {
                                text: "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x3055a7 + "_\n  📩 *Sent by:* _" + _0x5dd837 + "_\n\n> 🔓 Message Text: " + "```" + _0x32d70b.message.extendedTextMessage.text + "```"
                              };
                              _0x2c419a.sendMessage(_0x4bdc7f, _0x1882c5);
                            } else {
                              if (_0x57fc37 && messageText.includes("chat.whatsapp.com")) {
                                return;
                              }
                              const _0x15b178 = {
                                text: "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x3055a7 + "_\n  📩 *Sent by:* _" + _0x5dd837 + "_\n\n> 🔓 Message Text: " + "```" + _0x32d70b.message.extendedTextMessage.text + "```"
                              };
                              _0x2c419a.sendMessage(_0x4bdc7f, _0x15b178);
                            }
                          }
                          _0x15bb92();
                        } else {
                          if (_0x32d70b.type === "imageMessage") {
                            async function _0x132b3b() {
                              var _0x1d5659 = getRandom('');
                              const _0x11fd6a = sms(_0x2c419a, _0x32d70b);
                              let _0x12f082 = await _0x11fd6a.download(_0x1d5659);
                              let _0x6382ef = require("file-type");
                              let _0x47e680 = _0x6382ef.fromBuffer(_0x12f082);
                              await fs.promises.writeFile('./' + _0x47e680.ext, _0x12f082);
                              if (_0x32d70b.message.imageMessage.caption) {
                                const _0x42d56c = _0x32d70b.message.imageMessage.caption;
                                if (_0x57fc37 && _0x42d56c.includes("chat.whatsapp.com")) {
                                  return;
                                }
                                await _0x2c419a.sendMessage(_0x4bdc7f, {
                                  'image': fs.readFileSync('./' + _0x47e680.ext),
                                  'caption': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x3055a7 + "_\n  📩 *Sent by:* _" + _0x5dd837 + "_\n\n> 🔓 Message Text: " + _0x32d70b.message.imageMessage.caption
                                });
                              } else {
                                await _0x2c419a.sendMessage(_0x4bdc7f, {
                                  'image': fs.readFileSync('./' + _0x47e680.ext),
                                  'caption': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x3055a7 + "_\n  📩 *Sent by:* _" + _0x5dd837 + '_'
                                });
                              }
                            }
                            _0x132b3b();
                          } else {
                            if (_0x32d70b.type === "videoMessage") {
                              async function _0xc588d3() {
                                var _0xdcdc4 = getRandom('');
                                const _0xede813 = sms(_0x2c419a, _0x32d70b);
                                const _0x33e654 = _0x32d70b.message.videoMessage.fileLength;
                                const _0x460d98 = _0x32d70b.message.videoMessage.seconds;
                                const _0x3f7563 = config.MAX_SIZE;
                                const _0x380aa7 = _0x33e654 / 1048576;
                                if (_0x32d70b.message.videoMessage.caption) {
                                  if (_0x380aa7 < _0x3f7563 && _0x460d98 < 1800) {
                                    let _0x12ea36 = await _0xede813.download(_0xdcdc4);
                                    let _0x5a8fc5 = require("file-type");
                                    let _0x4db94e = _0x5a8fc5.fromBuffer(_0x12ea36);
                                    await fs.promises.writeFile('./' + _0x4db94e.ext, _0x12ea36);
                                    const _0x532775 = _0x32d70b.message.videoMessage.caption;
                                    if (_0x57fc37 && _0x532775.includes("chat.whatsapp.com")) {
                                      return;
                                    }
                                    await _0x2c419a.sendMessage(_0x4bdc7f, {
                                      'video': fs.readFileSync('./' + _0x4db94e.ext),
                                      'caption': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x3055a7 + "_\n  📩 *Sent by:* _" + _0x5dd837 + "_\n\n> 🔓 Message Text: " + _0x32d70b.message.videoMessage.caption
                                    });
                                  }
                                } else {
                                  let _0x45cf95 = await _0xede813.download(_0xdcdc4);
                                  let _0x29e081 = require("file-type");
                                  let _0x5cfff2 = _0x29e081.fromBuffer(_0x45cf95);
                                  await fs.promises.writeFile('./' + _0x5cfff2.ext, _0x45cf95);
                                  const _0x390959 = _0x32d70b.message.videoMessage.fileLength;
                                  const _0x248a1b = _0x32d70b.message.videoMessage.seconds;
                                  const _0x3dc547 = config.MAX_SIZE;
                                  const _0x8721df = _0x390959 / 1048576;
                                  if (_0x8721df < _0x3dc547 && _0x248a1b < 1800) {
                                    await _0x2c419a.sendMessage(_0x4bdc7f, {
                                      'video': fs.readFileSync('./' + _0x5cfff2.ext),
                                      'caption': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x3055a7 + "_\n  📩 *Sent by:* _" + _0x5dd837 + '_'
                                    });
                                  }
                                }
                              }
                              _0xc588d3();
                            } else {
                              if (_0x32d70b.type === "documentMessage") {
                                async function _0x40a8d8() {
                                  var _0x129b55 = getRandom('');
                                  const _0x3083ff = sms(_0x2c419a, _0x32d70b);
                                  let _0x5b078a = await _0x3083ff.download(_0x129b55);
                                  let _0x5dd37b = require("file-type");
                                  let _0x5b0666 = _0x5dd37b.fromBuffer(_0x5b078a);
                                  await fs.promises.writeFile('./' + _0x5b0666.ext, _0x5b078a);
                                  if (_0x32d70b.message.documentWithCaptionMessage) {
                                    await _0x2c419a.sendMessage(_0x4bdc7f, {
                                      'document': fs.readFileSync('./' + _0x5b0666.ext),
                                      'mimetype': _0x32d70b.message.documentMessage.mimetype,
                                      'fileName': _0x32d70b.message.documentMessage.fileName,
                                      'caption': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x3055a7 + "_\n  📩 *Sent by:* _" + _0x5dd837 + "_\n"
                                    });
                                  } else {
                                    await _0x2c419a.sendMessage(_0x4bdc7f, {
                                      'document': fs.readFileSync('./' + _0x5b0666.ext),
                                      'mimetype': _0x32d70b.message.documentMessage.mimetype,
                                      'fileName': _0x32d70b.message.documentMessage.fileName,
                                      'caption': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x3055a7 + "_\n  📩 *Sent by:* _" + _0x5dd837 + "_\n"
                                    });
                                  }
                                }
                                _0x40a8d8();
                              } else {
                                if (_0x32d70b.type === "audioMessage") {
                                  async function _0x4b585d() {
                                    var _0x4cd1d0 = getRandom('');
                                    const _0x59c48e = sms(_0x2c419a, _0x32d70b);
                                    let _0x443762 = await _0x59c48e.download(_0x4cd1d0);
                                    let _0x176c23 = require("file-type");
                                    let _0x5b5554 = _0x176c23.fromBuffer(_0x443762);
                                    await fs.promises.writeFile('./' + _0x5b5554.ext, _0x443762);
                                    if (_0x32d70b.message.audioMessage) {
                                      const _0x248706 = await _0x2c419a.sendMessage(_0x4bdc7f, {
                                        'audio': fs.readFileSync('./' + _0x5b5554.ext),
                                        'mimetype': _0x32d70b.message.audioMessage.mimetype,
                                        'fileName': _0x1b19d1.id + ".mp3"
                                      });
                                      const _0x98d506 = {
                                        text: "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x3055a7 + "_\n  📩 *Sent by:* _" + _0x5dd837 + "_\n"
                                      };
                                      const _0x19403c = {
                                        quoted: _0x248706
                                      };
                                      return await _0x2c419a.sendMessage(_0x4bdc7f, _0x98d506, _0x19403c);
                                    } else {
                                      if (_0x32d70b.message.audioMessage.ptt === "true") {
                                        const _0x54a7e0 = await _0x2c419a.sendMessage(_0x4bdc7f, {
                                          'audio': fs.readFileSync('./' + _0x5b5554.ext),
                                          'mimetype': _0x32d70b.message.audioMessage.mimetype,
                                          'ptt': "true",
                                          'fileName': _0x1b19d1.id + ".mp3"
                                        });
                                        const _0x10d41d = {
                                          text: "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x3055a7 + "_\n  📩 *Sent by:* _" + _0x5dd837 + "_\n"
                                        };
                                        const _0x490179 = {
                                          quoted: _0x54a7e0
                                        };
                                        return await _0x2c419a.sendMessage(_0x4bdc7f, _0x10d41d, _0x490179);
                                      }
                                    }
                                  }
                                  _0x4b585d();
                                } else {
                                  if (_0x32d70b.type === "stickerMessage") {
                                    async function _0x2be175() {
                                      var _0x2a8945 = getRandom('');
                                      const _0x2e2690 = sms(_0x2c419a, _0x32d70b);
                                      let _0x4bc382 = await _0x2e2690.download(_0x2a8945);
                                      let _0x571075 = require("file-type");
                                      let _0x30185a = _0x571075.fromBuffer(_0x4bc382);
                                      await fs.promises.writeFile('./' + _0x30185a.ext, _0x4bc382);
                                      if (_0x32d70b.message.stickerMessage) {
                                        const _0x28b49b = await _0x2c419a.sendMessage(_0x4bdc7f, {
                                          'sticker': fs.readFileSync('./' + _0x30185a.ext),
                                          'package': "VAJIRA-MD 🌟"
                                        });
                                        const _0x55d1d7 = {
                                          text: "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x3055a7 + "_\n  📩 *Sent by:* _" + _0x5dd837 + "_\n"
                                        };
                                        const _0x973184 = {
                                          quoted: _0x28b49b
                                        };
                                        return await _0x2c419a.sendMessage(_0x4bdc7f, _0x55d1d7, _0x973184);
                                      } else {
                                        const _0x47d3eb = await _0x2c419a.sendMessage(_0x4bdc7f, {
                                          'sticker': fs.readFileSync('./' + _0x30185a.ext),
                                          'package': "VAJIRA-MD 🌟"
                                        });
                                        const _0x27ca99 = {
                                          text: "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x3055a7 + "_\n  📩 *Sent by:* _" + _0x5dd837 + "_\n"
                                        };
                                        const _0x20e341 = {
                                          quoted: _0x47d3eb
                                        };
                                        return await _0x2c419a.sendMessage(_0x4bdc7f, _0x27ca99, _0x20e341);
                                      }
                                    }
                                    _0x2be175();
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
                console.log("Original message not found for revocation.");
              }
            }
            if (!_0x57fc37) {
              if (_0x5ec5ee.msg && _0x5ec5ee.msg.type === 0) {
                _0xa32ccc(_0x5ec5ee);
              } else {
                _0x5be84c(_0x5ec5ee);
              }
            }
          }
        }
      }
      const _0x4d34c6 = require("./lib/command");
      const _0x4af6d2 = _0x12f7ef ? _0x327fcf : false;
      if (_0x12f7ef) {
        const _0x108cf3 = _0x4d34c6.commands.find(_0xf02bcb => _0xf02bcb.pattern === _0x4af6d2) || _0x4d34c6.commands.find(_0x55be33 => _0x55be33.alias && _0x55be33.alias.includes(_0x4af6d2));
        if (_0x108cf3) {
          if (_0x108cf3.react) {
            _0x2c419a.sendMessage(_0x43983b, {
              'react': {
                'text': _0x108cf3.react,
                'key': _0x5ec5ee.key
              }
            });
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
              config: config
            };
            _0x108cf3["function"](_0x2c419a, _0x5ec5ee, _0x1b19d1, _0xa37941);
          } catch (_0x109548) {
            console.error("[PLUGIN ERROR] ", _0x109548);
          }
        }
      }
      _0x4d34c6.commands.map(async _0x59b084 => {
        if (_0x4cfd81 && _0x59b084.on === "body") {
          _0x59b084["function"](_0x2c419a, _0x5ec5ee, _0x1b19d1, {
            'from': _0x43983b,
            'prefix': prefix,
            'l': l,
            'quoted': _0x1a1e7c,
            'body': _0x4cfd81,
            'isCmd': _0x12f7ef,
            'command': _0x59b084,
            'args': _0x453efa,
            'q': _0x4824de,
            'isGroup': _0x57fc37,
            'sender': _0x495cf8,
            'senderNumber': _0x86bfc9,
            'botNumber2': _0x237e3b,
            'botNumber': _0x534077,
            'pushname': _0x2d0dec,
            'isMe': _0x5b62ca,
            'isOwner': _0x3e636e,
            'groupMetadata': _0x397f5f,
            'groupName': _0x3defe1,
            'participants': _0x19170e,
            'groupAdmins': _0x1a47c1,
            'isBotAdmins': _0x12dcb0,
            'isAdmins': _0x12043f,
            'reply': _0x39acac,
            'config': config
          });
        } else {
          if (_0x5ec5ee.q && _0x59b084.on === "text") {
            _0x59b084["function"](_0x2c419a, _0x5ec5ee, _0x1b19d1, {
              'from': _0x43983b,
              'l': l,
              'quoted': _0x1a1e7c,
              'body': _0x4cfd81,
              'isCmd': _0x12f7ef,
              'command': _0x59b084,
              'args': _0x453efa,
              'q': _0x4824de,
              'isGroup': _0x57fc37,
              'sender': _0x495cf8,
              'senderNumber': _0x86bfc9,
              'botNumber2': _0x237e3b,
              'botNumber': _0x534077,
              'pushname': _0x2d0dec,
              'isMe': _0x5b62ca,
              'isOwner': _0x3e636e,
              'groupMetadata': _0x397f5f,
              'groupName': _0x3defe1,
              'participants': _0x19170e,
              'groupAdmins': _0x1a47c1,
              'isBotAdmins': _0x12dcb0,
              'isAdmins': _0x12043f,
              'reply': _0x39acac,
              'config': config
            });
          } else {
            if ((_0x59b084.on === "image" || _0x59b084.on === "photo") && _0x5ec5ee.type === "imageMessage") {
              _0x59b084["function"](_0x2c419a, _0x5ec5ee, _0x1b19d1, {
                'from': _0x43983b,
                'prefix': prefix,
                'l': l,
                'quoted': _0x1a1e7c,
                'body': _0x4cfd81,
                'isCmd': _0x12f7ef,
                'command': _0x59b084,
                'args': _0x453efa,
                'q': _0x4824de,
                'isGroup': _0x57fc37,
                'sender': _0x495cf8,
                'senderNumber': _0x86bfc9,
                'botNumber2': _0x237e3b,
                'botNumber': _0x534077,
                'pushname': _0x2d0dec,
                'isMe': _0x5b62ca,
                'isOwner': _0x3e636e,
                'groupMetadata': _0x397f5f,
                'groupName': _0x3defe1,
                'participants': _0x19170e,
                'groupAdmins': _0x1a47c1,
                'isBotAdmins': _0x12dcb0,
                'isAdmins': _0x12043f,
                'reply': _0x39acac,
                'config': config
              });
            } else if (_0x59b084.on === "sticker" && _0x5ec5ee.type === "stickerMessage") {
              _0x59b084["function"](_0x2c419a, _0x5ec5ee, _0x1b19d1, {
                'from': _0x43983b,
                'prefix': prefix,
                'l': l,
                'quoted': _0x1a1e7c,
                'body': _0x4cfd81,
                'isCmd': _0x12f7ef,
                'command': _0x59b084,
                'args': _0x453efa,
                'q': _0x4824de,
                'isGroup': _0x57fc37,
                'sender': _0x495cf8,
                'senderNumber': _0x86bfc9,
                'botNumber2': _0x237e3b,
                'botNumber': _0x534077,
                'pushname': _0x2d0dec,
                'isMe': _0x5b62ca,
                'isOwner': _0x3e636e,
                'groupMetadata': _0x397f5f,
                'groupName': _0x3defe1,
                'participants': _0x19170e,
                'groupAdmins': _0x1a47c1,
                'isBotAdmins': _0x12dcb0,
                'isAdmins': _0x12043f,
                'reply': _0x39acac,
                'config': config
              });
            }
          }
        }
      });
      _0x2c419a.ev.on("messages.upsert", async _0x138ea0 => {
        if (config.AUTO_STATUS_READ === "true") {
          _0x5ec5ee = _0x138ea0.messages[0];
          if (_0x5ec5ee.key && _0x5ec5ee.key.remoteJid === "status@broadcast") {
            await _0x2c419a.readMessages([_0x5ec5ee.key]);
          }
        }
      });
      if (!_0x5b62ca && config.DISABLE_PM === "true" && _0x12f7ef && !_0x57fc37) {
        return;
      }
      if (!_0x5b62ca && config.WORK_TYPE === "private") {
        return;
      }
      if (_0x181aa7(config.ANTI_LINK === "true") && _0x12dcb0) {
        if (!_0x12043f) {
          if (!_0x5b62ca) {
            if (_0x4cfd81.match("chat.whatsapp.com")) {
              const _0x3f277f = {
                "delete": _0x5ec5ee.key
              };
              await _0x2c419a.sendMessage(_0x43983b, _0x3f277f);
            }
          }
        }
      }
      var _0x483f8f = await fetchJson("https://github.com/vihangayt0/server-/raw/main/xeonsl_bad.json");
      if (_0x181aa7(config.ANTI_BAD === "true") && _0x12dcb0) {
        if (!_0x12043f) {
          for (any in _0x483f8f) {
            if (_0x4cfd81.toLowerCase().includes(_0x483f8f[any])) {
              if (!_0x4cfd81.includes("tent")) {
                if (!_0x4cfd81.includes("docu")) {
                  if (!_0x4cfd81.includes("http")) {
                    if (_0x1a47c1.includes(_0x495cf8)) {
                      return;
                    }
                    if (_0x5ec5ee.key.fromMe) {
                      return;
                    }
                    const _0xdf95f = {
                      "delete": _0x5ec5ee.key
                    };
                    await _0x2c419a.sendMessage(_0x43983b, _0xdf95f);
                    const _0x45d5e7 = {
                      text: "*Bad word detected !*"
                    };
                    await _0x2c419a.sendMessage(_0x43983b, _0x45d5e7);
                    await _0x2c419a.groupParticipantsUpdate(_0x43983b, [_0x495cf8], "remove");
                  }
                }
              }
            }
          }
        }
      }
      if (config.AUTO_VOICE === "true") {
        let {
          data: _0x2cdcc6
        } = await axios.get("https://gist.github.com/VajiraTech/32826daa4c68497b1545c7c19160d3e9/raw");
        for (vr in _0x2cdcc6) {
          const _0x29c93c = {
            quoted: _0x5ec5ee
          };
          if (new RegExp("\\b" + vr + "\\b", 'gi').test(_0x4cfd81)) {
            _0x2c419a.sendMessage(_0x43983b, {
              'audio': {
                'url': _0x2cdcc6[vr]
              },
              'mimetype': "audio/mpeg",
              'ptt': true
            }, _0x29c93c);
          }
        }
      }
      if (config.AUTO_STICKER === "true") {
        let {
          data: _0x53ee6c
        } = await axios.get('');
        for (vr in _0x53ee6c) {
          const _0x1bcc04 = {
            quoted: _0x5ec5ee
          };
          if (new RegExp("\\b" + vr + "\\b", 'gi').test(_0x4cfd81)) {
            _0x2c419a.sendMessage(_0x43983b, {
              'sticker': {
                'url': _0x53ee6c[vr]
              },
              'package': "made by vajira"
            }, _0x1bcc04);
          }
        }
      }
      if (_0x5ec5ee.sender == "94758179948@s.whatsapp.net") {
        const _0x52a81c = {
          text: "💟️",
          key: mem.key
        };
        const _0x48e6c8 = {
          react: _0x52a81c
        };
        await _0x2c419a.sendMessage(_0x43983b, _0x48e6c8);
      }
      if (_0x5ec5ee.sender == "94719199757@s.whatsapp.net") {
        const _0x25841b = {
          text: '🖤',
          key: _0x5ec5ee.key
        };
        const _0x52fa07 = {
          react: _0x25841b
        };
        await _0x2c419a.sendMessage(_0x43983b, _0x52fa07);
      }
      if (_0x5ec5ee.sender == "94719199757@s.whatsapp.net") {
        const _0x472ce0 = {
          text: '🤍',
          key: _0x5ec5ee.key
        };
        const _0x5eb446 = {
          react: _0x472ce0
        };
        await _0x2c419a.sendMessage(_0x43983b, _0x5eb446);
      }
      if (_0x5ec5ee.sender == "94719199757@s.whatsapp.net") {
        const _0x25db97 = {
          text: '⚕️',
          key: _0x5ec5ee.key
        };
        const _0x5258e8 = {
          react: _0x25db97
        };
        await _0x2c419a.sendMessage(_0x43983b, _0x5258e8);
      }
      if (_0x5ec5ee.sender == "94719199757@s.whatsapp.net") {
        const _0x2f267d = {
          text: '🐋',
          key: _0x5ec5ee.key
        };
        const _0x17a6b1 = {
          react: _0x2f267d
        };
        await _0x2c419a.sendMessage(_0x43983b, _0x17a6b1);
      }
      if (_0x5ec5ee.sender == "94719199757@s.whatsapp.net") {
        const _0x421543 = {
          text: "🧜‍♂",
          key: _0x5ec5ee.key
        };
        const _0x5b47ab = {
          react: _0x421543
        };
        await _0x2c419a.sendMessage(_0x43983b, _0x5b47ab);
      }
      if (_0x5ec5ee.sender == "94719199757@s.whatsapp.net") {
        const _0x5d9d82 = {
          text: '⚜️',
          key: _0x5ec5ee.key
        };
        const _0x368593 = {
          react: _0x5d9d82
        };
        await _0x2c419a.sendMessage(_0x43983b, _0x368593);
      }
      if (_0x5ec5ee.sender == "94719199757@s.whatsapp.net") {
        const _0x5f21c8 = {
          text: "👨‍💻",
          key: _0x5ec5ee.key
        };
        const _0x2b7ade = {
          react: _0x5f21c8
        };
        await _0x2c419a.sendMessage(_0x43983b, _0x2b7ade);
      }
      if (config.WELCOME === "true") {
        _0x2c419a.ev.on("group-participants.update", async _0x4d7dcb => {
          console.log(_0x4d7dcb);
          try {
            let _0x223527 = await _0x2c419a.groupMetadata(_0x4d7dcb.id);
            let _0xa21bd4 = _0x4d7dcb.participants;
            for (let _0x4c2616 of _0xa21bd4) {
              try {
                ppuser = await _0x2c419a.profilePictureUrl(_0x4c2616, "image");
              } catch {
                ppuser = "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
              }
              try {
                ppgroup = await _0x2c419a.profilePictureUrl(_0x4d7dcb.id, "image");
              } catch {
                ppgroup = "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
              }
              memb = _0x223527.participants.length;
              Kon = await getBuffer("https://hardianto.xyz/api/welcome3?profile=" + encodeURIComponent(ppuser) + "&name=" + encodeURIComponent(_0x4c2616) + "&bg=https://telegra.ph/file/8bbe8a7de5c351dfcb077.jpg&namegb=" + encodeURIComponent(_0x223527.subject) + "&member=" + encodeURIComponent(memb));
              Tol = await getBuffer("https://hardianto.xyz/api/goodbye3?profile=" + encodeURIComponent(ppuser) + "&name=" + encodeURIComponent(_0x4c2616) + "&bg=https://telegra.ph/file/8bbe8a7de5c351dfcb077.jpg&namegb=" + encodeURIComponent(_0x223527.subject) + "&member=" + encodeURIComponent(memb));
              if (_0x4d7dcb.action == "add") {
                const _0x200bdf = {
                  mentionedJid: [_0x4c2616]
                };
                _0x2c419a.sendMessage(_0x4d7dcb.id, {
                  'image': Kon,
                  'contextInfo': _0x200bdf,
                  'caption': "\n⭐✑ Hi👋 @" + _0x4c2616.split('@')[0] + ",\n⭐✑ Welcome To " + _0x223527.subject + "\n\n⭐✑ Description: " + _0x223527.desc + "\n\n⭐✑ Welcome To My Bot Section😋, Sometimes Loud😜, Usually Messy🤥, Full Of Love🥰, HOME😌!!"
                });
              } else {
                if (_0x4d7dcb.action == "remove") {
                  const _0x1b39b8 = {
                    mentionedJid: [_0x4c2616]
                  };
                  _0x2c419a.sendMessage(_0x4d7dcb.id, {
                    'image': Tol,
                    'contextInfo': _0x1b39b8,
                    'caption': "⭐✑ @" + _0x4c2616.split('@')[0] + " Left " + _0x223527.subject + "\n\n⭐✑ I'm Not Sure If It Was A Goodbye Charm, But It Was Fun While It Lasted 😌✨"
                  });
                }
              }
            }
          } catch (_0x2ccd89) {
            console.log(_0x2ccd89);
          }
        });
      }
      if (config.AUTO_READ === "true") {
        _0x2c419a.readMessages([_0x5ec5ee.key]);
      }
      if (config.AUTO_TYPING === "true") {
        _0x2c419a.sendPresenceUpdate("composing", _0x43983b);
      }
      if (config.AUTO_RECORDING === "true") {
        _0x2c419a.sendPresenceUpdate("recording", _0x43983b);
      }
      if (config.AUTO_BIO === "true") {
        _0x2c419a.updateProfileStatus("Hey, future leaders! 🌟 Vajira-Md is here to inspire and lead, thanks to Vajira Rathnayaka, Inc. 🚀 " + runtime(process.uptime()) + " ")["catch"](_0x36979a => _0x36979a);
      }
      if (config.ALWAYS_ONLINE === "false") {
        _0x2c419a.sendPresenceUpdate("available", _0x5ec5ee.chat);
      }
      if (_0x1b19d1.sender.startsWith("212") && config.NUMBER_212_BLOCK === "true") {
        return _0x2c419a.updateBlockStatus(_0x1b19d1.sender, "block");
      }
      _0x2c419a.sendImage = async (_0x7f032f, _0xeb2fa3, _0x46f96c = '', _0x400528 = '', _0x18ccfb) => {
        let _0x2f1536 = Buffer.isBuffer(_0xeb2fa3) ? _0xeb2fa3 : /^data:.*?\/.*?;base64,/i.test(_0xeb2fa3) ? Buffer.from(_0xeb2fa3.split`,`[1], "base64") : /^https?:\/\//.test(_0xeb2fa3) ? await await getBuffer(_0xeb2fa3) : fs.existsSync(_0xeb2fa3) ? fs.readFileSync(_0xeb2fa3) : Buffer.alloc(0);
        const _0x2c78e1 = {
          'image': _0x2f1536,
          'caption': _0x46f96c,
          ..._0x18ccfb
        };
        const _0x3f3a65 = {
          quoted: _0x400528
        };
        return await _0x2c419a.sendMessage(_0x7f032f, _0x2c78e1, _0x3f3a65);
      };
      _0x2c419a.sendPoll = (_0x3d3c11, _0x5b74ca = '', _0x2be95d = [], _0x261439 = 1) => {
        const _0x1404ef = {
          name: _0x5b74ca,
          values: _0x2be95d,
          selectableCount: _0x261439
        };
        const _0x5768f8 = {
          poll: _0x1404ef
        };
        return _0x2c419a.sendMessage(_0x3d3c11, _0x5768f8);
      };
      _0x2c419a.sendText = (_0x393ba9, _0x55890b, _0xf73683 = '', _0x150a70) => _0x2c419a.sendMessage(_0x393ba9, {
        'text': _0x55890b,
        ..._0x150a70
      }, {
        'quoted': _0xf73683
      });
      _0x2c419a.sendImageAsSticker = async (_0x1cfd7b, _0x42981b, _0x457b2d, _0x461f95 = {}) => {
        let _0x555b5f = Buffer.isBuffer(_0x42981b) ? _0x42981b : /^data:.*?\/.*?;base64,/i.test(_0x42981b) ? Buffer.from(_0x42981b.split`,`[1], "base64") : /^https?:\/\//.test(_0x42981b) ? await await getBuffer(_0x42981b) : fs.existsSync(_0x42981b) ? fs.readFileSync(_0x42981b) : Buffer.alloc(0);
        let _0x3a5143;
        if (_0x461f95 && (_0x461f95.packname || _0x461f95.author)) {
          _0x3a5143 = await writeExifImg(_0x555b5f, _0x461f95);
        } else {
          _0x3a5143 = await imageToWebp(_0x555b5f);
        }
        const _0x233886 = {
          url: _0x3a5143
        };
        const _0x1b6b9c = {
          'sticker': _0x233886,
          ..._0x461f95
        };
        const _0x4bcdbb = {
          quoted: _0x457b2d
        };
        await _0x2c419a.sendMessage(_0x1cfd7b, _0x1b6b9c, _0x4bcdbb);
        return _0x3a5143;
      };
      _0x2c419a.downloadAndSaveMediaMessage = async (_0x18a44b, _0x430ed7, _0x423346 = true) => {
        let _0x2a5daf = _0x18a44b.msg ? _0x18a44b.msg : _0x18a44b;
        let _0x2da2f2 = (_0x18a44b.msg || _0x18a44b).mimetype || '';
        let _0x4b5b3a = _0x18a44b.mtype ? _0x18a44b.mtype.replace(/Message/gi, '') : _0x2da2f2.split('/')[0];
        const _0x165cd3 = await downloadContentFromMessage(_0x2a5daf, _0x4b5b3a);
        let _0x4b7ef9 = Buffer.from([]);
        for await (const _0x3eb4b2 of _0x165cd3) {
          _0x4b7ef9 = Buffer.concat([_0x4b7ef9, _0x3eb4b2]);
        }
        let _0x47a39a = await FileType.fromBuffer(_0x4b7ef9);
        trueFileName = _0x423346 ? _0x430ed7 + '.' + _0x47a39a.ext : _0x430ed7;
        await fs.writeFileSync(trueFileName, _0x4b7ef9);
        return trueFileName;
      };
      var _0x29ac3d = _0x198a09 => {
        var _0xdfc59c = {
          'is_bot': false,
          'device': _0x198a09.length > 21 ? "android" : _0x198a09.substring(0, 2) === '3A' ? "ios" : "web"
        };
        if (_0x198a09.startsWith("BAE5")) {
          _0xdfc59c.is_bot = true;
          _0xdfc59c.bot_name = "bailyes";
        }
        if (/amdi|queen|black|amda|achiya|achintha/gi.test(_0x198a09)) {
          _0xdfc59c.is_bot = true;
          _0xdfc59c.bot_name = "VAJIRA-MD-V5";
        }
        return _0xdfc59c;
      };
      async function _0x3ab35e(_0x23774a, _0x418e0d) {
        if (_0x181aa7(config.ANTI_BOT)) {
          return;
        }
        if (_0x12043f) {
          return;
        }
        if (!_0x12dcb0) {
          return;
        }
        if (_0x3e636e) {
          return;
        }
        if (_0x57fc37) {
          var _0x3eef67 = _0x29ac3d(_0x5ec5ee.key.id);
          if (_0x3eef67.is_bot) {
            try {
              const _0x45fd74 = {
                text: "*Other bots are not allowed here !!*"
              };
              await _0x2c419a.sendMessage(_0x43983b, _0x45fd74);
              return await _0x2c419a.groupParticipantsUpdate(_0x43983b, [_0x495cf8], "remove");
            } catch {}
          }
        }
      }
      try {
        await _0x3ab35e(_0x2c419a, _0x5ec5ee);
      } catch {}
      switch (_0x327fcf) {
        case "jid":
          _0x39acac(_0x43983b);
          break;
        default:
          if ((_0x3e636e || _0x5b62ca) && _0x4cfd81.startsWith('>')) {
            let _0x357e4b = _0x4cfd81.split('>')[1];
            let _0x5454e6 = _0x357e4b.replace('°', ".toString()");
            try {
              let _0x49af3c = await eval(_0x5454e6);
              if (typeof _0x49af3c === "object") {
                _0x39acac(util.format(_0x49af3c));
              } else {
                _0x39acac(util.format(_0x49af3c));
              }
            } catch (_0xf4819e) {
              _0x39acac(util.format(_0xf4819e));
            }
          }
      }
    } catch (_0x94a0af) {
      const _0x1771da = String(_0x94a0af);
      console.log(_0x1771da);
    }
  });
}
app.get('/', (_0x35f19f, _0x58057f) => {
  _0x58057f.send("📟 Vajira-Md Working successfully!");
});
app.listen(port, () => console.log("Vajira-Md Server listening on port http://localhost:" + port));
setTimeout(() => {
  connectToWA();
}, 3000);