import styled, { DefaultTheme } from 'styled-components';
import { ThemeIconsEnum } from './ThemeIconsEnum';

const getIconContent = (icon: string, theme: DefaultTheme): string => {
  let iconContent = '';
  switch (icon) {
    case ThemeIconsEnum.home:
      iconContent = theme.icons.home;
      break;
    case ThemeIconsEnum.home2:
      iconContent = theme.icons[ThemeIconsEnum.home2];
      break;
    case ThemeIconsEnum.home3:
      iconContent = theme.icons[ThemeIconsEnum.home3];
      break;
    case ThemeIconsEnum.home4:
      iconContent = theme.icons[ThemeIconsEnum.home4];
      break;
    case ThemeIconsEnum.home5:
      iconContent = theme.icons[ThemeIconsEnum.home5];
      break;
    case ThemeIconsEnum.home6:
      iconContent = theme.icons[ThemeIconsEnum.home6];
      break;
    case ThemeIconsEnum.bathtub:
      iconContent = theme.icons[ThemeIconsEnum.bathtub];
      break;
    case ThemeIconsEnum.toothbrush:
      iconContent = theme.icons[ThemeIconsEnum.toothbrush];
      break;
    case ThemeIconsEnum.bed:
      iconContent = theme.icons[ThemeIconsEnum.bed];
      break;
    case ThemeIconsEnum.couch:
      iconContent = theme.icons[ThemeIconsEnum.couch];
      break;
    case ThemeIconsEnum.chair:
      iconContent = theme.icons[ThemeIconsEnum.chair];
      break;
    case ThemeIconsEnum.city:
      iconContent = theme.icons[ThemeIconsEnum.city];
      break;
    case ThemeIconsEnum.apartment:
      iconContent = theme.icons[ThemeIconsEnum.apartment];
      break;
    case ThemeIconsEnum.pencil:
      iconContent = theme.icons[ThemeIconsEnum.pencil];
      break;
    case ThemeIconsEnum.pencil2:
      iconContent = theme.icons[ThemeIconsEnum.pencil2];
      break;
    case ThemeIconsEnum.pen:
      iconContent = theme.icons[ThemeIconsEnum.pen];
      break;
    case ThemeIconsEnum.pencil3:
      iconContent = theme.icons[ThemeIconsEnum.pencil3];
      break;
    case ThemeIconsEnum.eraser:
      iconContent = theme.icons[ThemeIconsEnum.eraser];
      break;
    case ThemeIconsEnum.pencil4:
      iconContent = theme.icons[ThemeIconsEnum.pencil4];
      break;
    case ThemeIconsEnum.pencil5:
      iconContent = theme.icons[ThemeIconsEnum.pencil5];
      break;
    case ThemeIconsEnum.feather:
      iconContent = theme.icons[ThemeIconsEnum.feather];
      break;
    case ThemeIconsEnum.feather2:
      iconContent = theme.icons[ThemeIconsEnum.feather2];
      break;
    case ThemeIconsEnum.feather3:
      iconContent = theme.icons[ThemeIconsEnum.feather3];
      break;
    case ThemeIconsEnum.pen2:
      iconContent = theme.icons[ThemeIconsEnum.pen2];
      break;
    case ThemeIconsEnum['pen-add']:
      iconContent = theme.icons[ThemeIconsEnum['pen-add']];
      break;
    case ThemeIconsEnum['pen-remove']:
      iconContent = theme.icons[ThemeIconsEnum['pen-remove']];
      break;
    case ThemeIconsEnum.vector:
      iconContent = theme.icons[ThemeIconsEnum.vector];
      break;
    case ThemeIconsEnum.pen3:
      iconContent = theme.icons[ThemeIconsEnum.pen3];
      break;
    case ThemeIconsEnum.blog:
      iconContent = theme.icons[ThemeIconsEnum.blog];
      break;
    case ThemeIconsEnum.brush:
      iconContent = theme.icons[ThemeIconsEnum.brush];
      break;
    case ThemeIconsEnum.brush2:
      iconContent = theme.icons[ThemeIconsEnum.brush2];
      break;
    case ThemeIconsEnum.spray:
      iconContent = theme.icons[ThemeIconsEnum.spray];
      break;
    case ThemeIconsEnum['paint-roller']:
      iconContent = theme.icons[ThemeIconsEnum['paint-roller']];
      break;
    case ThemeIconsEnum.stamp:
      iconContent = theme.icons[ThemeIconsEnum.stamp];
      break;
    case ThemeIconsEnum.tape:
      iconContent = theme.icons[ThemeIconsEnum.tape];
      break;
    case ThemeIconsEnum['desk-tape']:
      iconContent = theme.icons[ThemeIconsEnum['desk-tape']];
      break;
    case ThemeIconsEnum.texture:
      iconContent = theme.icons[ThemeIconsEnum.texture];
      break;
    case ThemeIconsEnum['eye-dropper']:
      iconContent = theme.icons[ThemeIconsEnum['eye-dropper']];
      break;
    case ThemeIconsEnum.palette:
      iconContent = theme.icons[ThemeIconsEnum.palette];
      break;
    case ThemeIconsEnum['color-sampler']:
      iconContent = theme.icons[ThemeIconsEnum['color-sampler']];
      break;
    case ThemeIconsEnum.bucket:
      iconContent = theme.icons[ThemeIconsEnum.bucket];
      break;
    case ThemeIconsEnum.gradient:
      iconContent = theme.icons[ThemeIconsEnum.gradient];
      break;
    case ThemeIconsEnum.gradient2:
      iconContent = theme.icons[ThemeIconsEnum.gradient2];
      break;
    case ThemeIconsEnum['magic-wand']:
      iconContent = theme.icons[ThemeIconsEnum['magic-wand']];
      break;
    case ThemeIconsEnum.magnet:
      iconContent = theme.icons[ThemeIconsEnum.magnet];
      break;
    case ThemeIconsEnum['pencil-ruler']:
      iconContent = theme.icons[ThemeIconsEnum['pencil-ruler']];
      break;
    case ThemeIconsEnum['pencil-ruler2']:
      iconContent = theme.icons[ThemeIconsEnum['pencil-ruler2']];
      break;
    case ThemeIconsEnum.compass:
      iconContent = theme.icons[ThemeIconsEnum.compass];
      break;
    case ThemeIconsEnum.aim:
      iconContent = theme.icons[ThemeIconsEnum.aim];
      break;
    case ThemeIconsEnum.gun:
      iconContent = theme.icons[ThemeIconsEnum.gun];
      break;
    case ThemeIconsEnum.bottle:
      iconContent = theme.icons[ThemeIconsEnum.bottle];
      break;
    case ThemeIconsEnum.drop:
      iconContent = theme.icons[ThemeIconsEnum.drop];
      break;
    case ThemeIconsEnum['drop-crossed']:
      iconContent = theme.icons[ThemeIconsEnum['drop-crossed']];
      break;
    case ThemeIconsEnum.drop2:
      iconContent = theme.icons[ThemeIconsEnum.drop2];
      break;
    case ThemeIconsEnum.snow:
      iconContent = theme.icons[ThemeIconsEnum.snow];
      break;
    case ThemeIconsEnum.snow2:
      iconContent = theme.icons[ThemeIconsEnum.snow2];
      break;
    case ThemeIconsEnum.fire:
      iconContent = theme.icons[ThemeIconsEnum.fire];
      break;
    case ThemeIconsEnum.lighter:
      iconContent = theme.icons[ThemeIconsEnum.lighter];
      break;
    case ThemeIconsEnum.knife:
      iconContent = theme.icons[ThemeIconsEnum.knife];
      break;
    case ThemeIconsEnum.dagger:
      iconContent = theme.icons[ThemeIconsEnum.dagger];
      break;
    case ThemeIconsEnum.tissue:
      iconContent = theme.icons[ThemeIconsEnum.tissue];
      break;
    case ThemeIconsEnum['toilet-paper']:
      iconContent = theme.icons[ThemeIconsEnum['toilet-paper']];
      break;
    case ThemeIconsEnum.poop:
      iconContent = theme.icons[ThemeIconsEnum.poop];
      break;
    case ThemeIconsEnum.umbrella:
      iconContent = theme.icons[ThemeIconsEnum.umbrella];
      break;
    case ThemeIconsEnum.umbrella2:
      iconContent = theme.icons[ThemeIconsEnum.umbrella2];
      break;
    case ThemeIconsEnum.rain:
      iconContent = theme.icons[ThemeIconsEnum.rain];
      break;
    case ThemeIconsEnum.tornado:
      iconContent = theme.icons[ThemeIconsEnum.tornado];
      break;
    case ThemeIconsEnum.wind:
      iconContent = theme.icons[ThemeIconsEnum.wind];
      break;
    case ThemeIconsEnum.fan:
      iconContent = theme.icons[ThemeIconsEnum.fan];
      break;
    case ThemeIconsEnum.contrast:
      iconContent = theme.icons[ThemeIconsEnum.contrast];
      break;
    case ThemeIconsEnum['sun-small']:
      iconContent = theme.icons[ThemeIconsEnum['sun-small']];
      break;
    case ThemeIconsEnum.sun:
      iconContent = theme.icons[ThemeIconsEnum.sun];
      break;
    case ThemeIconsEnum.sun2:
      iconContent = theme.icons[ThemeIconsEnum.sun2];
      break;
    case ThemeIconsEnum.moon:
      iconContent = theme.icons[ThemeIconsEnum.moon];
      break;
    case ThemeIconsEnum.cloud:
      iconContent = theme.icons[ThemeIconsEnum.cloud];
      break;
    case ThemeIconsEnum['cloud-upload']:
      iconContent = theme.icons[ThemeIconsEnum['cloud-upload']];
      break;
    case ThemeIconsEnum['cloud-download']:
      iconContent = theme.icons[ThemeIconsEnum['cloud-download']];
      break;
    case ThemeIconsEnum['cloud-rain']:
      iconContent = theme.icons[ThemeIconsEnum['cloud-rain']];
      break;
    case ThemeIconsEnum['cloud-hailstones']:
      iconContent = theme.icons[ThemeIconsEnum['cloud-hailstones']];
      break;
    case ThemeIconsEnum['cloud-snow']:
      iconContent = theme.icons[ThemeIconsEnum['cloud-snow']];
      break;
    case ThemeIconsEnum['cloud-windy']:
      iconContent = theme.icons[ThemeIconsEnum['cloud-windy']];
      break;
    case ThemeIconsEnum['sun-wind']:
      iconContent = theme.icons[ThemeIconsEnum['sun-wind']];
      break;
    case ThemeIconsEnum['cloud-fog']:
      iconContent = theme.icons[ThemeIconsEnum['cloud-fog']];
      break;
    case ThemeIconsEnum['cloud-sun']:
      iconContent = theme.icons[ThemeIconsEnum['cloud-sun']];
      break;
    case ThemeIconsEnum['cloud-lightning']:
      iconContent = theme.icons[ThemeIconsEnum['cloud-lightning']];
      break;
    case ThemeIconsEnum['cloud-sync']:
      iconContent = theme.icons[ThemeIconsEnum['cloud-sync']];
      break;
    case ThemeIconsEnum['cloud-lock']:
      iconContent = theme.icons[ThemeIconsEnum['cloud-lock']];
      break;
    case ThemeIconsEnum['cloud-gear']:
      iconContent = theme.icons[ThemeIconsEnum['cloud-gear']];
      break;
    case ThemeIconsEnum['cloud-alert']:
      iconContent = theme.icons[ThemeIconsEnum['cloud-alert']];
      break;
    case ThemeIconsEnum['cloud-check']:
      iconContent = theme.icons[ThemeIconsEnum['cloud-check']];
      break;
    case ThemeIconsEnum['cloud-cross']:
      iconContent = theme.icons[ThemeIconsEnum['cloud-cross']];
      break;
    case ThemeIconsEnum['cloud-crossed']:
      iconContent = theme.icons[ThemeIconsEnum['cloud-crossed']];
      break;
    case ThemeIconsEnum['cloud-database']:
      iconContent = theme.icons[ThemeIconsEnum['cloud-database']];
      break;
    case ThemeIconsEnum.database:
      iconContent = theme.icons[ThemeIconsEnum.database];
      break;
    case ThemeIconsEnum['database-add']:
      iconContent = theme.icons[ThemeIconsEnum['database-add']];
      break;
    case ThemeIconsEnum['database-remove']:
      iconContent = theme.icons[ThemeIconsEnum['database-remove']];
      break;
    case ThemeIconsEnum['database-lock']:
      iconContent = theme.icons[ThemeIconsEnum['database-lock']];
      break;
    case ThemeIconsEnum['database-refresh']:
      iconContent = theme.icons[ThemeIconsEnum['database-refresh']];
      break;
    case ThemeIconsEnum['database-check']:
      iconContent = theme.icons[ThemeIconsEnum['database-check']];
      break;
    case ThemeIconsEnum['database-history']:
      iconContent = theme.icons[ThemeIconsEnum['database-history']];
      break;
    case ThemeIconsEnum['database-upload']:
      iconContent = theme.icons[ThemeIconsEnum['database-upload']];
      break;
    case ThemeIconsEnum['database-download']:
      iconContent = theme.icons[ThemeIconsEnum['database-download']];
      break;
    case ThemeIconsEnum.server:
      iconContent = theme.icons[ThemeIconsEnum.server];
      break;
    case ThemeIconsEnum.shield:
      iconContent = theme.icons[ThemeIconsEnum.shield];
      break;
    case ThemeIconsEnum['shield-check']:
      iconContent = theme.icons[ThemeIconsEnum['shield-check']];
      break;
    case ThemeIconsEnum['shield-alert']:
      iconContent = theme.icons[ThemeIconsEnum['shield-alert']];
      break;
    case ThemeIconsEnum['shield-cross']:
      iconContent = theme.icons[ThemeIconsEnum['shield-cross']];
      break;
    case ThemeIconsEnum.lock:
      iconContent = theme.icons[ThemeIconsEnum.lock];
      break;
    case ThemeIconsEnum['rotation-lock']:
      iconContent = theme.icons[ThemeIconsEnum['rotation-lock']];
      break;
    case ThemeIconsEnum.unlock:
      iconContent = theme.icons[ThemeIconsEnum.unlock];
      break;
    case ThemeIconsEnum.key:
      iconContent = theme.icons[ThemeIconsEnum.key];
      break;
    case ThemeIconsEnum['key-hole']:
      iconContent = theme.icons[ThemeIconsEnum['key-hole']];
      break;
    case ThemeIconsEnum['toggle-off']:
      iconContent = theme.icons[ThemeIconsEnum['toggle-off']];
      break;
    case ThemeIconsEnum['toggle-on']:
      iconContent = theme.icons[ThemeIconsEnum['toggle-on']];
      break;
    case ThemeIconsEnum.cog:
      iconContent = theme.icons[ThemeIconsEnum.cog];
      break;
    case ThemeIconsEnum.cog2:
      iconContent = theme.icons[ThemeIconsEnum.cog2];
      break;
    case ThemeIconsEnum.wrench:
      iconContent = theme.icons[ThemeIconsEnum.wrench];
      break;
    case ThemeIconsEnum.screwdriver:
      iconContent = theme.icons[ThemeIconsEnum.screwdriver];
      break;
    case ThemeIconsEnum['hammer-wrench']:
      iconContent = theme.icons[ThemeIconsEnum['hammer-wrench']];
      break;
    case ThemeIconsEnum.hammer:
      iconContent = theme.icons[ThemeIconsEnum.hammer];
      break;
    case ThemeIconsEnum.saw:
      iconContent = theme.icons[ThemeIconsEnum.saw];
      break;
    case ThemeIconsEnum.axe:
      iconContent = theme.icons[ThemeIconsEnum.axe];
      break;
    case ThemeIconsEnum.axe2:
      iconContent = theme.icons[ThemeIconsEnum.axe2];
      break;
    case ThemeIconsEnum.shovel:
      iconContent = theme.icons[ThemeIconsEnum.shovel];
      break;
    case ThemeIconsEnum.pickaxe:
      iconContent = theme.icons[ThemeIconsEnum.pickaxe];
      break;
    case ThemeIconsEnum.factory:
      iconContent = theme.icons[ThemeIconsEnum.factory];
      break;
    case ThemeIconsEnum.factory2:
      iconContent = theme.icons[ThemeIconsEnum.factory2];
      break;
    case ThemeIconsEnum.recycle:
      iconContent = theme.icons[ThemeIconsEnum.recycle];
      break;
    case ThemeIconsEnum.trash:
      iconContent = theme.icons[ThemeIconsEnum.trash];
      break;
    case ThemeIconsEnum.trash2:
      iconContent = theme.icons[ThemeIconsEnum.trash2];
      break;
    case ThemeIconsEnum.trash3:
      iconContent = theme.icons[ThemeIconsEnum.trash3];
      break;
    case ThemeIconsEnum.broom:
      iconContent = theme.icons[ThemeIconsEnum.broom];
      break;
    case ThemeIconsEnum.game:
      iconContent = theme.icons[ThemeIconsEnum.game];
      break;
    case ThemeIconsEnum.gamepad:
      iconContent = theme.icons[ThemeIconsEnum.gamepad];
      break;
    case ThemeIconsEnum.joystick:
      iconContent = theme.icons[ThemeIconsEnum.joystick];
      break;
    case ThemeIconsEnum.dice:
      iconContent = theme.icons[ThemeIconsEnum.dice];
      break;
    case ThemeIconsEnum.spades:
      iconContent = theme.icons[ThemeIconsEnum.spades];
      break;
    case ThemeIconsEnum.diamonds:
      iconContent = theme.icons[ThemeIconsEnum.diamonds];
      break;
    case ThemeIconsEnum.clubs:
      iconContent = theme.icons[ThemeIconsEnum.clubs];
      break;
    case ThemeIconsEnum.hearts:
      iconContent = theme.icons[ThemeIconsEnum.hearts];
      break;
    case ThemeIconsEnum.heart:
      iconContent = theme.icons[ThemeIconsEnum.heart];
      break;
    case ThemeIconsEnum.star:
      iconContent = theme.icons[ThemeIconsEnum.star];
      break;
    case ThemeIconsEnum['star-half']:
      iconContent = theme.icons[ThemeIconsEnum['star-half']];
      break;
    case ThemeIconsEnum['star-empty']:
      iconContent = theme.icons[ThemeIconsEnum['star-empty']];
      break;
    case ThemeIconsEnum.flag:
      iconContent = theme.icons[ThemeIconsEnum.flag];
      break;
    case ThemeIconsEnum.flag2:
      iconContent = theme.icons[ThemeIconsEnum.flag2];
      break;
    case ThemeIconsEnum.flag3:
      iconContent = theme.icons[ThemeIconsEnum.flag3];
      break;
    case ThemeIconsEnum['mailbox-full']:
      iconContent = theme.icons[ThemeIconsEnum['mailbox-full']];
      break;
    case ThemeIconsEnum['mailbox-empty']:
      iconContent = theme.icons[ThemeIconsEnum['mailbox-empty']];
      break;
    case ThemeIconsEnum['at-sign']:
      iconContent = theme.icons[ThemeIconsEnum['at-sign']];
      break;
    case ThemeIconsEnum.envelope:
      iconContent = theme.icons[ThemeIconsEnum.envelope];
      break;
    case ThemeIconsEnum['envelope-open']:
      iconContent = theme.icons[ThemeIconsEnum['envelope-open']];
      break;
    case ThemeIconsEnum.paperclip:
      iconContent = theme.icons[ThemeIconsEnum.paperclip];
      break;
    case ThemeIconsEnum['paper-plane']:
      iconContent = theme.icons[ThemeIconsEnum['paper-plane']];
      break;
    case ThemeIconsEnum.reply:
      iconContent = theme.icons[ThemeIconsEnum.reply];
      break;
    case ThemeIconsEnum['reply-all']:
      iconContent = theme.icons[ThemeIconsEnum['reply-all']];
      break;
    case ThemeIconsEnum.inbox:
      iconContent = theme.icons[ThemeIconsEnum.inbox];
      break;
    case ThemeIconsEnum.inbox2:
      iconContent = theme.icons[ThemeIconsEnum.inbox2];
      break;
    case ThemeIconsEnum.outbox:
      iconContent = theme.icons[ThemeIconsEnum.outbox];
      break;
    case ThemeIconsEnum.box:
      iconContent = theme.icons[ThemeIconsEnum.box];
      break;
    case ThemeIconsEnum.archive:
      iconContent = theme.icons[ThemeIconsEnum.archive];
      break;
    case ThemeIconsEnum.archive2:
      iconContent = theme.icons[ThemeIconsEnum.archive2];
      break;
    case ThemeIconsEnum.drawers:
      iconContent = theme.icons[ThemeIconsEnum.drawers];
      break;
    case ThemeIconsEnum.drawers2:
      iconContent = theme.icons[ThemeIconsEnum.drawers2];
      break;
    case ThemeIconsEnum.drawers3:
      iconContent = theme.icons[ThemeIconsEnum.drawers3];
      break;
    case ThemeIconsEnum.eye:
      iconContent = theme.icons[ThemeIconsEnum.eye];
      break;
    case ThemeIconsEnum['eye-crossed']:
      iconContent = theme.icons[ThemeIconsEnum['eye-crossed']];
      break;
    case ThemeIconsEnum['eye-plus']:
      iconContent = theme.icons[ThemeIconsEnum['eye-plus']];
      break;
    case ThemeIconsEnum['eye-minus']:
      iconContent = theme.icons[ThemeIconsEnum['eye-minus']];
      break;
    case ThemeIconsEnum.binoculars:
      iconContent = theme.icons[ThemeIconsEnum.binoculars];
      break;
    case ThemeIconsEnum.binoculars2:
      iconContent = theme.icons[ThemeIconsEnum.binoculars2];
      break;
    case ThemeIconsEnum.hdd:
      iconContent = theme.icons[ThemeIconsEnum.hdd];
      break;
    case ThemeIconsEnum['hdd-down']:
      iconContent = theme.icons[ThemeIconsEnum['hdd-down']];
      break;
    case ThemeIconsEnum['hdd-up']:
      iconContent = theme.icons[ThemeIconsEnum['hdd-up']];
      break;
    case ThemeIconsEnum['floppy-disk']:
      iconContent = theme.icons[ThemeIconsEnum['floppy-disk']];
      break;
    case ThemeIconsEnum.disc:
      iconContent = theme.icons[ThemeIconsEnum.disc];
      break;
    case ThemeIconsEnum.tape2:
      iconContent = theme.icons[ThemeIconsEnum.tape2];
      break;
    case ThemeIconsEnum.printer:
      iconContent = theme.icons[ThemeIconsEnum.printer];
      break;
    case ThemeIconsEnum.shredder:
      iconContent = theme.icons[ThemeIconsEnum.shredder];
      break;
    case ThemeIconsEnum['file-empty']:
      iconContent = theme.icons[ThemeIconsEnum['file-empty']];
      break;
    case ThemeIconsEnum['file-add']:
      iconContent = theme.icons[ThemeIconsEnum['file-add']];
      break;
    case ThemeIconsEnum['file-check']:
      iconContent = theme.icons[ThemeIconsEnum['file-check']];
      break;
    case ThemeIconsEnum['file-lock']:
      iconContent = theme.icons[ThemeIconsEnum['file-lock']];
      break;
    case ThemeIconsEnum.files:
      iconContent = theme.icons[ThemeIconsEnum.files];
      break;
    case ThemeIconsEnum.copy:
      iconContent = theme.icons[ThemeIconsEnum.copy];
      break;
    case ThemeIconsEnum.compare:
      iconContent = theme.icons[ThemeIconsEnum.compare];
      break;
    case ThemeIconsEnum.folder:
      iconContent = theme.icons[ThemeIconsEnum.folder];
      break;
    case ThemeIconsEnum['folder-search']:
      iconContent = theme.icons[ThemeIconsEnum['folder-search']];
      break;
    case ThemeIconsEnum['folder-plus']:
      iconContent = theme.icons[ThemeIconsEnum['folder-plus']];
      break;
    case ThemeIconsEnum['folder-minus']:
      iconContent = theme.icons[ThemeIconsEnum['folder-minus']];
      break;
    case ThemeIconsEnum['folder-download']:
      iconContent = theme.icons[ThemeIconsEnum['folder-download']];
      break;
    case ThemeIconsEnum['folder-upload']:
      iconContent = theme.icons[ThemeIconsEnum['folder-upload']];
      break;
    case ThemeIconsEnum['folder-star']:
      iconContent = theme.icons[ThemeIconsEnum['folder-star']];
      break;
    case ThemeIconsEnum['folder-heart']:
      iconContent = theme.icons[ThemeIconsEnum['folder-heart']];
      break;
    case ThemeIconsEnum['folder-user']:
      iconContent = theme.icons[ThemeIconsEnum['folder-user']];
      break;
    case ThemeIconsEnum['folder-shared']:
      iconContent = theme.icons[ThemeIconsEnum['folder-shared']];
      break;
    case ThemeIconsEnum['folder-music']:
      iconContent = theme.icons[ThemeIconsEnum['folder-music']];
      break;
    case ThemeIconsEnum['folder-picture']:
      iconContent = theme.icons[ThemeIconsEnum['folder-picture']];
      break;
    case ThemeIconsEnum['folder-film']:
      iconContent = theme.icons[ThemeIconsEnum['folder-film']];
      break;
    case ThemeIconsEnum.scissors:
      iconContent = theme.icons[ThemeIconsEnum.scissors];
      break;
    case ThemeIconsEnum.paste:
      iconContent = theme.icons[ThemeIconsEnum.paste];
      break;
    case ThemeIconsEnum['clipboard-empty']:
      iconContent = theme.icons[ThemeIconsEnum['clipboard-empty']];
      break;
    case ThemeIconsEnum['clipboard-pencil']:
      iconContent = theme.icons[ThemeIconsEnum['clipboard-pencil']];
      break;
    case ThemeIconsEnum['clipboard-text']:
      iconContent = theme.icons[ThemeIconsEnum['clipboard-text']];
      break;
    case ThemeIconsEnum['clipboard-check']:
      iconContent = theme.icons[ThemeIconsEnum['clipboard-check']];
      break;
    case ThemeIconsEnum['clipboard-down']:
      iconContent = theme.icons[ThemeIconsEnum['clipboard-down']];
      break;
    case ThemeIconsEnum['clipboard-left']:
      iconContent = theme.icons[ThemeIconsEnum['clipboard-left']];
      break;
    case ThemeIconsEnum['clipboard-alert']:
      iconContent = theme.icons[ThemeIconsEnum['clipboard-alert']];
      break;
    case ThemeIconsEnum['clipboard-user']:
      iconContent = theme.icons[ThemeIconsEnum['clipboard-user']];
      break;
    case ThemeIconsEnum.register:
      iconContent = theme.icons[ThemeIconsEnum.register];
      break;
    case ThemeIconsEnum.enter:
      iconContent = theme.icons[ThemeIconsEnum.enter];
      break;
    case ThemeIconsEnum.exit:
      iconContent = theme.icons[ThemeIconsEnum.exit];
      break;
    case ThemeIconsEnum.papers:
      iconContent = theme.icons[ThemeIconsEnum.papers];
      break;
    case ThemeIconsEnum.news:
      iconContent = theme.icons[ThemeIconsEnum.news];
      break;
    case ThemeIconsEnum.reading:
      iconContent = theme.icons[ThemeIconsEnum.reading];
      break;
    case ThemeIconsEnum.typewriter:
      iconContent = theme.icons[ThemeIconsEnum.typewriter];
      break;
    case ThemeIconsEnum.document:
      iconContent = theme.icons[ThemeIconsEnum.document];
      break;
    case ThemeIconsEnum.document2:
      iconContent = theme.icons[ThemeIconsEnum.document2];
      break;
    case ThemeIconsEnum['graduation-hat']:
      iconContent = theme.icons[ThemeIconsEnum['graduation-hat']];
      break;
    case ThemeIconsEnum.license:
      iconContent = theme.icons[ThemeIconsEnum.license];
      break;
    case ThemeIconsEnum.license2:
      iconContent = theme.icons[ThemeIconsEnum.license2];
      break;
    case ThemeIconsEnum['medal-empty']:
      iconContent = theme.icons[ThemeIconsEnum['medal-empty']];
      break;
    case ThemeIconsEnum['medal-first']:
      iconContent = theme.icons[ThemeIconsEnum['medal-first']];
      break;
    case ThemeIconsEnum['medal-second']:
      iconContent = theme.icons[ThemeIconsEnum['medal-second']];
      break;
    case ThemeIconsEnum['medal-third']:
      iconContent = theme.icons[ThemeIconsEnum['medal-third']];
      break;
    case ThemeIconsEnum.podium:
      iconContent = theme.icons[ThemeIconsEnum.podium];
      break;
    case ThemeIconsEnum.trophy:
      iconContent = theme.icons[ThemeIconsEnum.trophy];
      break;
    case ThemeIconsEnum.trophy2:
      iconContent = theme.icons[ThemeIconsEnum.trophy2];
      break;
    case ThemeIconsEnum['music-note']:
      iconContent = theme.icons[ThemeIconsEnum['music-note']];
      break;
    case ThemeIconsEnum['music-note2']:
      iconContent = theme.icons[ThemeIconsEnum['music-note2']];
      break;
    case ThemeIconsEnum['music-note3']:
      iconContent = theme.icons[ThemeIconsEnum['music-note3']];
      break;
    case ThemeIconsEnum.playlist:
      iconContent = theme.icons[ThemeIconsEnum.playlist];
      break;
    case ThemeIconsEnum['playlist-add']:
      iconContent = theme.icons[ThemeIconsEnum['playlist-add']];
      break;
    case ThemeIconsEnum.guitar:
      iconContent = theme.icons[ThemeIconsEnum.guitar];
      break;
    case ThemeIconsEnum.trumpet:
      iconContent = theme.icons[ThemeIconsEnum.trumpet];
      break;
    case ThemeIconsEnum.album:
      iconContent = theme.icons[ThemeIconsEnum.album];
      break;
    case ThemeIconsEnum.shuffle:
      iconContent = theme.icons[ThemeIconsEnum.shuffle];
      break;
    case ThemeIconsEnum['repeat-one']:
      iconContent = theme.icons[ThemeIconsEnum['repeat-one']];
      break;
    case ThemeIconsEnum.repeat:
      iconContent = theme.icons[ThemeIconsEnum.repeat];
      break;
    case ThemeIconsEnum.headphones:
      iconContent = theme.icons[ThemeIconsEnum.headphones];
      break;
    case ThemeIconsEnum.headset:
      iconContent = theme.icons[ThemeIconsEnum.headset];
      break;
    case ThemeIconsEnum.loudspeaker:
      iconContent = theme.icons[ThemeIconsEnum.loudspeaker];
      break;
    case ThemeIconsEnum.equalizer:
      iconContent = theme.icons[ThemeIconsEnum.equalizer];
      break;
    case ThemeIconsEnum.theater:
      iconContent = theme.icons[ThemeIconsEnum.theater];
      break;
    case ThemeIconsEnum['3d-glasses']:
      iconContent = theme.icons[ThemeIconsEnum['3d-glasses']];
      break;
    case ThemeIconsEnum.ticket:
      iconContent = theme.icons[ThemeIconsEnum.ticket];
      break;
    case ThemeIconsEnum.presentation:
      iconContent = theme.icons[ThemeIconsEnum.presentation];
      break;
    case ThemeIconsEnum.play:
      iconContent = theme.icons[ThemeIconsEnum.play];
      break;
    case ThemeIconsEnum['film-play']:
      iconContent = theme.icons[ThemeIconsEnum['film-play']];
      break;
    case ThemeIconsEnum['clapboard-play']:
      iconContent = theme.icons[ThemeIconsEnum['clapboard-play']];
      break;
    case ThemeIconsEnum.media:
      iconContent = theme.icons[ThemeIconsEnum.media];
      break;
    case ThemeIconsEnum.film:
      iconContent = theme.icons[ThemeIconsEnum.film];
      break;
    case ThemeIconsEnum.film2:
      iconContent = theme.icons[ThemeIconsEnum.film2];
      break;
    case ThemeIconsEnum.surveillance:
      iconContent = theme.icons[ThemeIconsEnum.surveillance];
      break;
    case ThemeIconsEnum.surveillance2:
      iconContent = theme.icons[ThemeIconsEnum.surveillance2];
      break;
    case ThemeIconsEnum.camera:
      iconContent = theme.icons[ThemeIconsEnum.camera];
      break;
    case ThemeIconsEnum['camera-crossed']:
      iconContent = theme.icons[ThemeIconsEnum['camera-crossed']];
      break;
    case ThemeIconsEnum['camera-play']:
      iconContent = theme.icons[ThemeIconsEnum['camera-play']];
      break;
    case ThemeIconsEnum['time-lapse']:
      iconContent = theme.icons[ThemeIconsEnum['time-lapse']];
      break;
    case ThemeIconsEnum.record:
      iconContent = theme.icons[ThemeIconsEnum.record];
      break;
    case ThemeIconsEnum.camera2:
      iconContent = theme.icons[ThemeIconsEnum.camera2];
      break;
    case ThemeIconsEnum['camera-flip']:
      iconContent = theme.icons[ThemeIconsEnum['camera-flip']];
      break;
    case ThemeIconsEnum.panorama:
      iconContent = theme.icons[ThemeIconsEnum.panorama];
      break;
    case ThemeIconsEnum['time-lapse2']:
      iconContent = theme.icons[ThemeIconsEnum['time-lapse2']];
      break;
    case ThemeIconsEnum.shutter:
      iconContent = theme.icons[ThemeIconsEnum.shutter];
      break;
    case ThemeIconsEnum.shutter2:
      iconContent = theme.icons[ThemeIconsEnum.shutter2];
      break;
    case ThemeIconsEnum['face-detection']:
      iconContent = theme.icons[ThemeIconsEnum['face-detection']];
      break;
    case ThemeIconsEnum.flare:
      iconContent = theme.icons[ThemeIconsEnum.flare];
      break;
    case ThemeIconsEnum.convex:
      iconContent = theme.icons[ThemeIconsEnum.convex];
      break;
    case ThemeIconsEnum.concave:
      iconContent = theme.icons[ThemeIconsEnum.concave];
      break;
    case ThemeIconsEnum.picture:
      iconContent = theme.icons[ThemeIconsEnum.picture];
      break;
    case ThemeIconsEnum.picture2:
      iconContent = theme.icons[ThemeIconsEnum.picture2];
      break;
    case ThemeIconsEnum.picture3:
      iconContent = theme.icons[ThemeIconsEnum.picture3];
      break;
    case ThemeIconsEnum.pictures:
      iconContent = theme.icons[ThemeIconsEnum.pictures];
      break;
    case ThemeIconsEnum.book:
      iconContent = theme.icons[ThemeIconsEnum.book];
      break;
    case ThemeIconsEnum['audio-book']:
      iconContent = theme.icons[ThemeIconsEnum['audio-book']];
      break;
    case ThemeIconsEnum.book2:
      iconContent = theme.icons[ThemeIconsEnum.book2];
      break;
    case ThemeIconsEnum.bookmark:
      iconContent = theme.icons[ThemeIconsEnum.bookmark];
      break;
    case ThemeIconsEnum.bookmark2:
      iconContent = theme.icons[ThemeIconsEnum.bookmark2];
      break;
    case ThemeIconsEnum.label:
      iconContent = theme.icons[ThemeIconsEnum.label];
      break;
    case ThemeIconsEnum.library:
      iconContent = theme.icons[ThemeIconsEnum.library];
      break;
    case ThemeIconsEnum.library2:
      iconContent = theme.icons[ThemeIconsEnum.library2];
      break;
    case ThemeIconsEnum.contacts:
      iconContent = theme.icons[ThemeIconsEnum.contacts];
      break;
    case ThemeIconsEnum.profile:
      iconContent = theme.icons[ThemeIconsEnum.profile];
      break;
    case ThemeIconsEnum.portrait:
      iconContent = theme.icons[ThemeIconsEnum.portrait];
      break;
    case ThemeIconsEnum.portrait2:
      iconContent = theme.icons[ThemeIconsEnum.portrait2];
      break;
    case ThemeIconsEnum.user:
      iconContent = theme.icons[ThemeIconsEnum.user];
      break;
    case ThemeIconsEnum['user-plus']:
      iconContent = theme.icons[ThemeIconsEnum['user-plus']];
      break;
    case ThemeIconsEnum['user-minus']:
      iconContent = theme.icons[ThemeIconsEnum['user-minus']];
      break;
    case ThemeIconsEnum['user-lock']:
      iconContent = theme.icons[ThemeIconsEnum['user-lock']];
      break;
    case ThemeIconsEnum.users:
      iconContent = theme.icons[ThemeIconsEnum.users];
      break;
    case ThemeIconsEnum.users2:
      iconContent = theme.icons[ThemeIconsEnum.users2];
      break;
    case ThemeIconsEnum['users-plus']:
      iconContent = theme.icons[ThemeIconsEnum['users-plus']];
      break;
    case ThemeIconsEnum['users-minus']:
      iconContent = theme.icons[ThemeIconsEnum['users-minus']];
      break;
    case ThemeIconsEnum['group-work']:
      iconContent = theme.icons[ThemeIconsEnum['group-work']];
      break;
    case ThemeIconsEnum.woman:
      iconContent = theme.icons[ThemeIconsEnum.woman];
      break;
    case ThemeIconsEnum.man:
      iconContent = theme.icons[ThemeIconsEnum.man];
      break;
    case ThemeIconsEnum.baby:
      iconContent = theme.icons[ThemeIconsEnum.baby];
      break;
    case ThemeIconsEnum.baby2:
      iconContent = theme.icons[ThemeIconsEnum.baby2];
      break;
    case ThemeIconsEnum.baby3:
      iconContent = theme.icons[ThemeIconsEnum.baby3];
      break;
    case ThemeIconsEnum['baby-bottle']:
      iconContent = theme.icons[ThemeIconsEnum['baby-bottle']];
      break;
    case ThemeIconsEnum.walk:
      iconContent = theme.icons[ThemeIconsEnum.walk];
      break;
    case ThemeIconsEnum['hand-waving']:
      iconContent = theme.icons[ThemeIconsEnum['hand-waving']];
      break;
    case ThemeIconsEnum.jump:
      iconContent = theme.icons[ThemeIconsEnum.jump];
      break;
    case ThemeIconsEnum.run:
      iconContent = theme.icons[ThemeIconsEnum.run];
      break;
    case ThemeIconsEnum.woman2:
      iconContent = theme.icons[ThemeIconsEnum.woman2];
      break;
    case ThemeIconsEnum.man2:
      iconContent = theme.icons[ThemeIconsEnum.man2];
      break;
    case ThemeIconsEnum['man-woman']:
      iconContent = theme.icons[ThemeIconsEnum['man-woman']];
      break;
    case ThemeIconsEnum.height:
      iconContent = theme.icons[ThemeIconsEnum.height];
      break;
    case ThemeIconsEnum.weight:
      iconContent = theme.icons[ThemeIconsEnum.weight];
      break;
    case ThemeIconsEnum.scale:
      iconContent = theme.icons[ThemeIconsEnum.scale];
      break;
    case ThemeIconsEnum.button:
      iconContent = theme.icons[ThemeIconsEnum.button];
      break;
    case ThemeIconsEnum['bow-tie']:
      iconContent = theme.icons[ThemeIconsEnum['bow-tie']];
      break;
    case ThemeIconsEnum.tie:
      iconContent = theme.icons[ThemeIconsEnum.tie];
      break;
    case ThemeIconsEnum.socks:
      iconContent = theme.icons[ThemeIconsEnum.socks];
      break;
    case ThemeIconsEnum.shoe:
      iconContent = theme.icons[ThemeIconsEnum.shoe];
      break;
    case ThemeIconsEnum.shoes:
      iconContent = theme.icons[ThemeIconsEnum.shoes];
      break;
    case ThemeIconsEnum.hat:
      iconContent = theme.icons[ThemeIconsEnum.hat];
      break;
    case ThemeIconsEnum.pants:
      iconContent = theme.icons[ThemeIconsEnum.pants];
      break;
    case ThemeIconsEnum.shorts:
      iconContent = theme.icons[ThemeIconsEnum.shorts];
      break;
    case ThemeIconsEnum['flip-flops']:
      iconContent = theme.icons[ThemeIconsEnum['flip-flops']];
      break;
    case ThemeIconsEnum.shirt:
      iconContent = theme.icons[ThemeIconsEnum.shirt];
      break;
    case ThemeIconsEnum.hanger:
      iconContent = theme.icons[ThemeIconsEnum.hanger];
      break;
    case ThemeIconsEnum.laundry:
      iconContent = theme.icons[ThemeIconsEnum.laundry];
      break;
    case ThemeIconsEnum.store:
      iconContent = theme.icons[ThemeIconsEnum.store];
      break;
    case ThemeIconsEnum.haircut:
      iconContent = theme.icons[ThemeIconsEnum.haircut];
      break;
    case ThemeIconsEnum['store-24']:
      iconContent = theme.icons[ThemeIconsEnum['store-24']];
      break;
    case ThemeIconsEnum.barcode:
      iconContent = theme.icons[ThemeIconsEnum.barcode];
      break;
    case ThemeIconsEnum.barcode2:
      iconContent = theme.icons[ThemeIconsEnum.barcode2];
      break;
    case ThemeIconsEnum.barcode3:
      iconContent = theme.icons[ThemeIconsEnum.barcode3];
      break;
    case ThemeIconsEnum.cashier:
      iconContent = theme.icons[ThemeIconsEnum.cashier];
      break;
    case ThemeIconsEnum.bag:
      iconContent = theme.icons[ThemeIconsEnum.bag];
      break;
    case ThemeIconsEnum.bag2:
      iconContent = theme.icons[ThemeIconsEnum.bag2];
      break;
    case ThemeIconsEnum.cart:
      iconContent = theme.icons[ThemeIconsEnum.cart];
      break;
    case ThemeIconsEnum['cart-empty']:
      iconContent = theme.icons[ThemeIconsEnum['cart-empty']];
      break;
    case ThemeIconsEnum['cart-full']:
      iconContent = theme.icons[ThemeIconsEnum['cart-full']];
      break;
    case ThemeIconsEnum['cart-plus']:
      iconContent = theme.icons[ThemeIconsEnum['cart-plus']];
      break;
    case ThemeIconsEnum['cart-plus2']:
      iconContent = theme.icons[ThemeIconsEnum['cart-plus2']];
      break;
    case ThemeIconsEnum['cart-add']:
      iconContent = theme.icons[ThemeIconsEnum['cart-add']];
      break;
    case ThemeIconsEnum['cart-remove']:
      iconContent = theme.icons[ThemeIconsEnum['cart-remove']];
      break;
    case ThemeIconsEnum['cart-exchange']:
      iconContent = theme.icons[ThemeIconsEnum['cart-exchange']];
      break;
    case ThemeIconsEnum.tag:
      iconContent = theme.icons[ThemeIconsEnum.tag];
      break;
    case ThemeIconsEnum.tags:
      iconContent = theme.icons[ThemeIconsEnum.tags];
      break;
    case ThemeIconsEnum.receipt:
      iconContent = theme.icons[ThemeIconsEnum.receipt];
      break;
    case ThemeIconsEnum.wallet:
      iconContent = theme.icons[ThemeIconsEnum.wallet];
      break;
    case ThemeIconsEnum['credit-card']:
      iconContent = theme.icons[ThemeIconsEnum['credit-card']];
      break;
    case ThemeIconsEnum['cash-dollar']:
      iconContent = theme.icons[ThemeIconsEnum['cash-dollar']];
      break;
    case ThemeIconsEnum['cash-euro']:
      iconContent = theme.icons[ThemeIconsEnum['cash-euro']];
      break;
    case ThemeIconsEnum['cash-pound']:
      iconContent = theme.icons[ThemeIconsEnum['cash-pound']];
      break;
    case ThemeIconsEnum['cash-yen']:
      iconContent = theme.icons[ThemeIconsEnum['cash-yen']];
      break;
    case ThemeIconsEnum['bag-dollar']:
      iconContent = theme.icons[ThemeIconsEnum['bag-dollar']];
      break;
    case ThemeIconsEnum['bag-euro']:
      iconContent = theme.icons[ThemeIconsEnum['bag-euro']];
      break;
    case ThemeIconsEnum['bag-pound']:
      iconContent = theme.icons[ThemeIconsEnum['bag-pound']];
      break;
    case ThemeIconsEnum['bag-yen']:
      iconContent = theme.icons[ThemeIconsEnum['bag-yen']];
      break;
    case ThemeIconsEnum['coin-dollar']:
      iconContent = theme.icons[ThemeIconsEnum['coin-dollar']];
      break;
    case ThemeIconsEnum['coin-euro']:
      iconContent = theme.icons[ThemeIconsEnum['coin-euro']];
      break;
    case ThemeIconsEnum['coin-pound']:
      iconContent = theme.icons[ThemeIconsEnum['coin-pound']];
      break;
    case ThemeIconsEnum['coin-yen']:
      iconContent = theme.icons[ThemeIconsEnum['coin-yen']];
      break;
    case ThemeIconsEnum.calculator:
      iconContent = theme.icons[ThemeIconsEnum.calculator];
      break;
    case ThemeIconsEnum.calculator2:
      iconContent = theme.icons[ThemeIconsEnum.calculator2];
      break;
    case ThemeIconsEnum.abacus:
      iconContent = theme.icons[ThemeIconsEnum.abacus];
      break;
    case ThemeIconsEnum.vault:
      iconContent = theme.icons[ThemeIconsEnum.vault];
      break;
    case ThemeIconsEnum.telephone:
      iconContent = theme.icons[ThemeIconsEnum.telephone];
      break;
    case ThemeIconsEnum['phone-lock']:
      iconContent = theme.icons[ThemeIconsEnum['phone-lock']];
      break;
    case ThemeIconsEnum['phone-wave']:
      iconContent = theme.icons[ThemeIconsEnum['phone-wave']];
      break;
    case ThemeIconsEnum['phone-pause']:
      iconContent = theme.icons[ThemeIconsEnum['phone-pause']];
      break;
    case ThemeIconsEnum['phone-outgoing']:
      iconContent = theme.icons[ThemeIconsEnum['phone-outgoing']];
      break;
    case ThemeIconsEnum['phone-incoming']:
      iconContent = theme.icons[ThemeIconsEnum['phone-incoming']];
      break;
    case ThemeIconsEnum['phone-in-out']:
      iconContent = theme.icons[ThemeIconsEnum['phone-in-out']];
      break;
    case ThemeIconsEnum['phone-error']:
      iconContent = theme.icons[ThemeIconsEnum['phone-error']];
      break;
    case ThemeIconsEnum['phone-sip']:
      iconContent = theme.icons[ThemeIconsEnum['phone-sip']];
      break;
    case ThemeIconsEnum['phone-plus']:
      iconContent = theme.icons[ThemeIconsEnum['phone-plus']];
      break;
    case ThemeIconsEnum['phone-minus']:
      iconContent = theme.icons[ThemeIconsEnum['phone-minus']];
      break;
    case ThemeIconsEnum.voicemail:
      iconContent = theme.icons[ThemeIconsEnum.voicemail];
      break;
    case ThemeIconsEnum.dial:
      iconContent = theme.icons[ThemeIconsEnum.dial];
      break;
    case ThemeIconsEnum.telephone2:
      iconContent = theme.icons[ThemeIconsEnum.telephone2];
      break;
    case ThemeIconsEnum.pushpin:
      iconContent = theme.icons[ThemeIconsEnum.pushpin];
      break;
    case ThemeIconsEnum.pushpin2:
      iconContent = theme.icons[ThemeIconsEnum.pushpin2];
      break;
    case ThemeIconsEnum['map-marker']:
      iconContent = theme.icons[ThemeIconsEnum['map-marker']];
      break;
    case ThemeIconsEnum['map-marker-user']:
      iconContent = theme.icons[ThemeIconsEnum['map-marker-user']];
      break;
    case ThemeIconsEnum['map-marker-down']:
      iconContent = theme.icons[ThemeIconsEnum['map-marker-down']];
      break;
    case ThemeIconsEnum['map-marker-check']:
      iconContent = theme.icons[ThemeIconsEnum['map-marker-check']];
      break;
    case ThemeIconsEnum['map-marker-crossed']:
      iconContent = theme.icons[ThemeIconsEnum['map-marker-crossed']];
      break;
    case ThemeIconsEnum.radar:
      iconContent = theme.icons[ThemeIconsEnum.radar];
      break;
    case ThemeIconsEnum.compass2:
      iconContent = theme.icons[ThemeIconsEnum.compass2];
      break;
    case ThemeIconsEnum.map:
      iconContent = theme.icons[ThemeIconsEnum.map];
      break;
    case ThemeIconsEnum.map2:
      iconContent = theme.icons[ThemeIconsEnum.map2];
      break;
    case ThemeIconsEnum.location:
      iconContent = theme.icons[ThemeIconsEnum.location];
      break;
    case ThemeIconsEnum['road-sign']:
      iconContent = theme.icons[ThemeIconsEnum['road-sign']];
      break;
    case ThemeIconsEnum['calendar-empty']:
      iconContent = theme.icons[ThemeIconsEnum['calendar-empty']];
      break;
    case ThemeIconsEnum['calendar-check']:
      iconContent = theme.icons[ThemeIconsEnum['calendar-check']];
      break;
    case ThemeIconsEnum['calendar-cross']:
      iconContent = theme.icons[ThemeIconsEnum['calendar-cross']];
      break;
    case ThemeIconsEnum['calendar-31']:
      iconContent = theme.icons[ThemeIconsEnum['calendar-31']];
      break;
    case ThemeIconsEnum['calendar-full']:
      iconContent = theme.icons[ThemeIconsEnum['calendar-full']];
      break;
    case ThemeIconsEnum['calendar-insert']:
      iconContent = theme.icons[ThemeIconsEnum['calendar-insert']];
      break;
    case ThemeIconsEnum['calendar-text']:
      iconContent = theme.icons[ThemeIconsEnum['calendar-text']];
      break;
    case ThemeIconsEnum['calendar-user']:
      iconContent = theme.icons[ThemeIconsEnum['calendar-user']];
      break;
    case ThemeIconsEnum.mouse:
      iconContent = theme.icons[ThemeIconsEnum.mouse];
      break;
    case ThemeIconsEnum['mouse-left']:
      iconContent = theme.icons[ThemeIconsEnum['mouse-left']];
      break;
    case ThemeIconsEnum['mouse-right']:
      iconContent = theme.icons[ThemeIconsEnum['mouse-right']];
      break;
    case ThemeIconsEnum['mouse-both']:
      iconContent = theme.icons[ThemeIconsEnum['mouse-both']];
      break;
    case ThemeIconsEnum.keyboard:
      iconContent = theme.icons[ThemeIconsEnum.keyboard];
      break;
    case ThemeIconsEnum['keyboard-up']:
      iconContent = theme.icons[ThemeIconsEnum['keyboard-up']];
      break;
    case ThemeIconsEnum['keyboard-down']:
      iconContent = theme.icons[ThemeIconsEnum['keyboard-down']];
      break;
    case ThemeIconsEnum.delete:
      iconContent = theme.icons[ThemeIconsEnum.delete];
      break;
    case ThemeIconsEnum['spell-check']:
      iconContent = theme.icons[ThemeIconsEnum['spell-check']];
      break;
    case ThemeIconsEnum.escape:
      iconContent = theme.icons[ThemeIconsEnum.escape];
      break;
    case ThemeIconsEnum.enter2:
      iconContent = theme.icons[ThemeIconsEnum.enter2];
      break;
    case ThemeIconsEnum.screen:
      iconContent = theme.icons[ThemeIconsEnum.screen];
      break;
    case ThemeIconsEnum['aspect-ratio']:
      iconContent = theme.icons[ThemeIconsEnum['aspect-ratio']];
      break;
    case ThemeIconsEnum.signal:
      iconContent = theme.icons[ThemeIconsEnum.signal];
      break;
    case ThemeIconsEnum['signal-lock']:
      iconContent = theme.icons[ThemeIconsEnum['signal-lock']];
      break;
    case ThemeIconsEnum['signal-80']:
      iconContent = theme.icons[ThemeIconsEnum['signal-80']];
      break;
    case ThemeIconsEnum['signal-60']:
      iconContent = theme.icons[ThemeIconsEnum['signal-60']];
      break;
    case ThemeIconsEnum['signal-40']:
      iconContent = theme.icons[ThemeIconsEnum['signal-40']];
      break;
    case ThemeIconsEnum['signal-20']:
      iconContent = theme.icons[ThemeIconsEnum['signal-20']];
      break;
    case ThemeIconsEnum['signal-0']:
      iconContent = theme.icons[ThemeIconsEnum['signal-0']];
      break;
    case ThemeIconsEnum['signal-blocked']:
      iconContent = theme.icons[ThemeIconsEnum['signal-blocked']];
      break;
    case ThemeIconsEnum.sim:
      iconContent = theme.icons[ThemeIconsEnum.sim];
      break;
    case ThemeIconsEnum['flash-memory']:
      iconContent = theme.icons[ThemeIconsEnum['flash-memory']];
      break;
    case ThemeIconsEnum['usb-drive']:
      iconContent = theme.icons[ThemeIconsEnum['usb-drive']];
      break;
    case ThemeIconsEnum.phone:
      iconContent = theme.icons[ThemeIconsEnum.phone];
      break;
    case ThemeIconsEnum.smartphone:
      iconContent = theme.icons[ThemeIconsEnum.smartphone];
      break;
    case ThemeIconsEnum['smartphone-notification']:
      iconContent = theme.icons[ThemeIconsEnum['smartphone-notification']];
      break;
    case ThemeIconsEnum['smartphone-vibration']:
      iconContent = theme.icons[ThemeIconsEnum['smartphone-vibration']];
      break;
    case ThemeIconsEnum['smartphone-embed']:
      iconContent = theme.icons[ThemeIconsEnum['smartphone-embed']];
      break;
    case ThemeIconsEnum['smartphone-waves']:
      iconContent = theme.icons[ThemeIconsEnum['smartphone-waves']];
      break;
    case ThemeIconsEnum.tablet:
      iconContent = theme.icons[ThemeIconsEnum.tablet];
      break;
    case ThemeIconsEnum.tablet2:
      iconContent = theme.icons[ThemeIconsEnum.tablet2];
      break;
    case ThemeIconsEnum.laptop:
      iconContent = theme.icons[ThemeIconsEnum.laptop];
      break;
    case ThemeIconsEnum['laptop-phone']:
      iconContent = theme.icons[ThemeIconsEnum['laptop-phone']];
      break;
    case ThemeIconsEnum.desktop:
      iconContent = theme.icons[ThemeIconsEnum.desktop];
      break;
    case ThemeIconsEnum.launch:
      iconContent = theme.icons[ThemeIconsEnum.launch];
      break;
    case ThemeIconsEnum['new-tab']:
      iconContent = theme.icons[ThemeIconsEnum['new-tab']];
      break;
    case ThemeIconsEnum.window:
      iconContent = theme.icons[ThemeIconsEnum.window];
      break;
    case ThemeIconsEnum.cable:
      iconContent = theme.icons[ThemeIconsEnum.cable];
      break;
    case ThemeIconsEnum.cable2:
      iconContent = theme.icons[ThemeIconsEnum.cable2];
      break;
    case ThemeIconsEnum.tv:
      iconContent = theme.icons[ThemeIconsEnum.tv];
      break;
    case ThemeIconsEnum.radio:
      iconContent = theme.icons[ThemeIconsEnum.radio];
      break;
    case ThemeIconsEnum['remote-control']:
      iconContent = theme.icons[ThemeIconsEnum['remote-control']];
      break;
    case ThemeIconsEnum['power-switch']:
      iconContent = theme.icons[ThemeIconsEnum['power-switch']];
      break;
    case ThemeIconsEnum.power:
      iconContent = theme.icons[ThemeIconsEnum.power];
      break;
    case ThemeIconsEnum['power-crossed']:
      iconContent = theme.icons[ThemeIconsEnum['power-crossed']];
      break;
    case ThemeIconsEnum['flash-auto']:
      iconContent = theme.icons[ThemeIconsEnum['flash-auto']];
      break;
    case ThemeIconsEnum.lamp:
      iconContent = theme.icons[ThemeIconsEnum.lamp];
      break;
    case ThemeIconsEnum.flashlight:
      iconContent = theme.icons[ThemeIconsEnum.flashlight];
      break;
    case ThemeIconsEnum.lampshade:
      iconContent = theme.icons[ThemeIconsEnum.lampshade];
      break;
    case ThemeIconsEnum.cord:
      iconContent = theme.icons[ThemeIconsEnum.cord];
      break;
    case ThemeIconsEnum.outlet:
      iconContent = theme.icons[ThemeIconsEnum.outlet];
      break;
    case ThemeIconsEnum['battery-power']:
      iconContent = theme.icons[ThemeIconsEnum['battery-power']];
      break;
    case ThemeIconsEnum['battery-empty']:
      iconContent = theme.icons[ThemeIconsEnum['battery-empty']];
      break;
    case ThemeIconsEnum['battery-alert']:
      iconContent = theme.icons[ThemeIconsEnum['battery-alert']];
      break;
    case ThemeIconsEnum['battery-error']:
      iconContent = theme.icons[ThemeIconsEnum['battery-error']];
      break;
    case ThemeIconsEnum['battery-low1']:
      iconContent = theme.icons[ThemeIconsEnum['battery-low1']];
      break;
    case ThemeIconsEnum['battery-low2']:
      iconContent = theme.icons[ThemeIconsEnum['battery-low2']];
      break;
    case ThemeIconsEnum['battery-low3']:
      iconContent = theme.icons[ThemeIconsEnum['battery-low3']];
      break;
    case ThemeIconsEnum['battery-mid1']:
      iconContent = theme.icons[ThemeIconsEnum['battery-mid1']];
      break;
    case ThemeIconsEnum['battery-mid2']:
      iconContent = theme.icons[ThemeIconsEnum['battery-mid2']];
      break;
    case ThemeIconsEnum['battery-mid3']:
      iconContent = theme.icons[ThemeIconsEnum['battery-mid3']];
      break;
    case ThemeIconsEnum['battery-full']:
      iconContent = theme.icons[ThemeIconsEnum['battery-full']];
      break;
    case ThemeIconsEnum['battery-charging']:
      iconContent = theme.icons[ThemeIconsEnum['battery-charging']];
      break;
    case ThemeIconsEnum['battery-charging2']:
      iconContent = theme.icons[ThemeIconsEnum['battery-charging2']];
      break;
    case ThemeIconsEnum['battery-charging3']:
      iconContent = theme.icons[ThemeIconsEnum['battery-charging3']];
      break;
    case ThemeIconsEnum['battery-charging4']:
      iconContent = theme.icons[ThemeIconsEnum['battery-charging4']];
      break;
    case ThemeIconsEnum['battery-charging5']:
      iconContent = theme.icons[ThemeIconsEnum['battery-charging5']];
      break;
    case ThemeIconsEnum['battery-charging6']:
      iconContent = theme.icons[ThemeIconsEnum['battery-charging6']];
      break;
    case ThemeIconsEnum['battery-charging7']:
      iconContent = theme.icons[ThemeIconsEnum['battery-charging7']];
      break;
    case ThemeIconsEnum.chip:
      iconContent = theme.icons[ThemeIconsEnum.chip];
      break;
    case ThemeIconsEnum['chip-x64']:
      iconContent = theme.icons[ThemeIconsEnum['chip-x64']];
      break;
    case ThemeIconsEnum['chip-x86']:
      iconContent = theme.icons[ThemeIconsEnum['chip-x86']];
      break;
    case ThemeIconsEnum.bubble:
      iconContent = theme.icons[ThemeIconsEnum.bubble];
      break;
    case ThemeIconsEnum.bubbles:
      iconContent = theme.icons[ThemeIconsEnum.bubbles];
      break;
    case ThemeIconsEnum['bubble-dots']:
      iconContent = theme.icons[ThemeIconsEnum['bubble-dots']];
      break;
    case ThemeIconsEnum['bubble-alert']:
      iconContent = theme.icons[ThemeIconsEnum['bubble-alert']];
      break;
    case ThemeIconsEnum['bubble-question']:
      iconContent = theme.icons[ThemeIconsEnum['bubble-question']];
      break;
    case ThemeIconsEnum['bubble-text']:
      iconContent = theme.icons[ThemeIconsEnum['bubble-text']];
      break;
    case ThemeIconsEnum['bubble-pencil']:
      iconContent = theme.icons[ThemeIconsEnum['bubble-pencil']];
      break;
    case ThemeIconsEnum['bubble-picture']:
      iconContent = theme.icons[ThemeIconsEnum['bubble-picture']];
      break;
    case ThemeIconsEnum['bubble-video']:
      iconContent = theme.icons[ThemeIconsEnum['bubble-video']];
      break;
    case ThemeIconsEnum['bubble-user']:
      iconContent = theme.icons[ThemeIconsEnum['bubble-user']];
      break;
    case ThemeIconsEnum['bubble-quote']:
      iconContent = theme.icons[ThemeIconsEnum['bubble-quote']];
      break;
    case ThemeIconsEnum['bubble-heart']:
      iconContent = theme.icons[ThemeIconsEnum['bubble-heart']];
      break;
    case ThemeIconsEnum['bubble-emoticon']:
      iconContent = theme.icons[ThemeIconsEnum['bubble-emoticon']];
      break;
    case ThemeIconsEnum['bubble-attachment']:
      iconContent = theme.icons[ThemeIconsEnum['bubble-attachment']];
      break;
    case ThemeIconsEnum['phone-bubble']:
      iconContent = theme.icons[ThemeIconsEnum['phone-bubble']];
      break;
    case ThemeIconsEnum['quote-open']:
      iconContent = theme.icons[ThemeIconsEnum['quote-open']];
      break;
    case ThemeIconsEnum['quote-close']:
      iconContent = theme.icons[ThemeIconsEnum['quote-close']];
      break;
    case ThemeIconsEnum.dna:
      iconContent = theme.icons[ThemeIconsEnum.dna];
      break;
    case ThemeIconsEnum['heart-pulse']:
      iconContent = theme.icons[ThemeIconsEnum['heart-pulse']];
      break;
    case ThemeIconsEnum.pulse:
      iconContent = theme.icons[ThemeIconsEnum.pulse];
      break;
    case ThemeIconsEnum.syringe:
      iconContent = theme.icons[ThemeIconsEnum.syringe];
      break;
    case ThemeIconsEnum.pills:
      iconContent = theme.icons[ThemeIconsEnum.pills];
      break;
    case ThemeIconsEnum['first-aid']:
      iconContent = theme.icons[ThemeIconsEnum['first-aid']];
      break;
    case ThemeIconsEnum.lifebuoy:
      iconContent = theme.icons[ThemeIconsEnum.lifebuoy];
      break;
    case ThemeIconsEnum.bandage:
      iconContent = theme.icons[ThemeIconsEnum.bandage];
      break;
    case ThemeIconsEnum.bandages:
      iconContent = theme.icons[ThemeIconsEnum.bandages];
      break;
    case ThemeIconsEnum.thermometer:
      iconContent = theme.icons[ThemeIconsEnum.thermometer];
      break;
    case ThemeIconsEnum.microscope:
      iconContent = theme.icons[ThemeIconsEnum.microscope];
      break;
    case ThemeIconsEnum.brain:
      iconContent = theme.icons[ThemeIconsEnum.brain];
      break;
    case ThemeIconsEnum.beaker:
      iconContent = theme.icons[ThemeIconsEnum.beaker];
      break;
    case ThemeIconsEnum.skull:
      iconContent = theme.icons[ThemeIconsEnum.skull];
      break;
    case ThemeIconsEnum.bone:
      iconContent = theme.icons[ThemeIconsEnum.bone];
      break;
    case ThemeIconsEnum.construction:
      iconContent = theme.icons[ThemeIconsEnum.construction];
      break;
    case ThemeIconsEnum['construction-cone']:
      iconContent = theme.icons[ThemeIconsEnum['construction-cone']];
      break;
    case ThemeIconsEnum['pie-chart']:
      iconContent = theme.icons[ThemeIconsEnum['pie-chart']];
      break;
    case ThemeIconsEnum['pie-chart2']:
      iconContent = theme.icons[ThemeIconsEnum['pie-chart2']];
      break;
    case ThemeIconsEnum.graph:
      iconContent = theme.icons[ThemeIconsEnum.graph];
      break;
    case ThemeIconsEnum['chart-growth']:
      iconContent = theme.icons[ThemeIconsEnum['chart-growth']];
      break;
    case ThemeIconsEnum['chart-bars']:
      iconContent = theme.icons[ThemeIconsEnum['chart-bars']];
      break;
    case ThemeIconsEnum['chart-settings']:
      iconContent = theme.icons[ThemeIconsEnum['chart-settings']];
      break;
    case ThemeIconsEnum.cake:
      iconContent = theme.icons[ThemeIconsEnum.cake];
      break;
    case ThemeIconsEnum.gift:
      iconContent = theme.icons[ThemeIconsEnum.gift];
      break;
    case ThemeIconsEnum.balloon:
      iconContent = theme.icons[ThemeIconsEnum.balloon];
      break;
    case ThemeIconsEnum.rank:
      iconContent = theme.icons[ThemeIconsEnum.rank];
      break;
    case ThemeIconsEnum.rank2:
      iconContent = theme.icons[ThemeIconsEnum.rank2];
      break;
    case ThemeIconsEnum.rank3:
      iconContent = theme.icons[ThemeIconsEnum.rank3];
      break;
    case ThemeIconsEnum.crown:
      iconContent = theme.icons[ThemeIconsEnum.crown];
      break;
    case ThemeIconsEnum.lotus:
      iconContent = theme.icons[ThemeIconsEnum.lotus];
      break;
    case ThemeIconsEnum.diamond:
      iconContent = theme.icons[ThemeIconsEnum.diamond];
      break;
    case ThemeIconsEnum.diamond2:
      iconContent = theme.icons[ThemeIconsEnum.diamond2];
      break;
    case ThemeIconsEnum.diamond3:
      iconContent = theme.icons[ThemeIconsEnum.diamond3];
      break;
    case ThemeIconsEnum.diamond4:
      iconContent = theme.icons[ThemeIconsEnum.diamond4];
      break;
    case ThemeIconsEnum.linearicons:
      iconContent = theme.icons[ThemeIconsEnum.linearicons];
      break;
    case ThemeIconsEnum.teacup:
      iconContent = theme.icons[ThemeIconsEnum.teacup];
      break;
    case ThemeIconsEnum.teapot:
      iconContent = theme.icons[ThemeIconsEnum.teapot];
      break;
    case ThemeIconsEnum.glass:
      iconContent = theme.icons[ThemeIconsEnum.glass];
      break;
    case ThemeIconsEnum.bottle2:
      iconContent = theme.icons[ThemeIconsEnum.bottle2];
      break;
    case ThemeIconsEnum['glass-cocktail']:
      iconContent = theme.icons[ThemeIconsEnum['glass-cocktail']];
      break;
    case ThemeIconsEnum.glass2:
      iconContent = theme.icons[ThemeIconsEnum.glass2];
      break;
    case ThemeIconsEnum.dinner:
      iconContent = theme.icons[ThemeIconsEnum.dinner];
      break;
    case ThemeIconsEnum.dinner2:
      iconContent = theme.icons[ThemeIconsEnum.dinner2];
      break;
    case ThemeIconsEnum.chef:
      iconContent = theme.icons[ThemeIconsEnum.chef];
      break;
    case ThemeIconsEnum.scale2:
      iconContent = theme.icons[ThemeIconsEnum.scale2];
      break;
    case ThemeIconsEnum.egg:
      iconContent = theme.icons[ThemeIconsEnum.egg];
      break;
    case ThemeIconsEnum.egg2:
      iconContent = theme.icons[ThemeIconsEnum.egg2];
      break;
    case ThemeIconsEnum.eggs:
      iconContent = theme.icons[ThemeIconsEnum.eggs];
      break;
    case ThemeIconsEnum.platter:
      iconContent = theme.icons[ThemeIconsEnum.platter];
      break;
    case ThemeIconsEnum.steak:
      iconContent = theme.icons[ThemeIconsEnum.steak];
      break;
    case ThemeIconsEnum.hamburger:
      iconContent = theme.icons[ThemeIconsEnum.hamburger];
      break;
    case ThemeIconsEnum.hotdog:
      iconContent = theme.icons[ThemeIconsEnum.hotdog];
      break;
    case ThemeIconsEnum.pizza:
      iconContent = theme.icons[ThemeIconsEnum.pizza];
      break;
    case ThemeIconsEnum.sausage:
      iconContent = theme.icons[ThemeIconsEnum.sausage];
      break;
    case ThemeIconsEnum.chicken:
      iconContent = theme.icons[ThemeIconsEnum.chicken];
      break;
    case ThemeIconsEnum.fish:
      iconContent = theme.icons[ThemeIconsEnum.fish];
      break;
    case ThemeIconsEnum.carrot:
      iconContent = theme.icons[ThemeIconsEnum.carrot];
      break;
    case ThemeIconsEnum.cheese:
      iconContent = theme.icons[ThemeIconsEnum.cheese];
      break;
    case ThemeIconsEnum.bread:
      iconContent = theme.icons[ThemeIconsEnum.bread];
      break;
    case ThemeIconsEnum['ice-cream']:
      iconContent = theme.icons[ThemeIconsEnum['ice-cream']];
      break;
    case ThemeIconsEnum['ice-cream2']:
      iconContent = theme.icons[ThemeIconsEnum['ice-cream2']];
      break;
    case ThemeIconsEnum.candy:
      iconContent = theme.icons[ThemeIconsEnum.candy];
      break;
    case ThemeIconsEnum.lollipop:
      iconContent = theme.icons[ThemeIconsEnum.lollipop];
      break;
    case ThemeIconsEnum['coffee-bean']:
      iconContent = theme.icons[ThemeIconsEnum['coffee-bean']];
      break;
    case ThemeIconsEnum['coffee-cup']:
      iconContent = theme.icons[ThemeIconsEnum['coffee-cup']];
      break;
    case ThemeIconsEnum.cherry:
      iconContent = theme.icons[ThemeIconsEnum.cherry];
      break;
    case ThemeIconsEnum.grapes:
      iconContent = theme.icons[ThemeIconsEnum.grapes];
      break;
    case ThemeIconsEnum.citrus:
      iconContent = theme.icons[ThemeIconsEnum.citrus];
      break;
    case ThemeIconsEnum.apple:
      iconContent = theme.icons[ThemeIconsEnum.apple];
      break;
    case ThemeIconsEnum.leaf:
      iconContent = theme.icons[ThemeIconsEnum.leaf];
      break;
    case ThemeIconsEnum.landscape:
      iconContent = theme.icons[ThemeIconsEnum.landscape];
      break;
    case ThemeIconsEnum['pine-tree']:
      iconContent = theme.icons[ThemeIconsEnum['pine-tree']];
      break;
    case ThemeIconsEnum.tree:
      iconContent = theme.icons[ThemeIconsEnum.tree];
      break;
    case ThemeIconsEnum.cactus:
      iconContent = theme.icons[ThemeIconsEnum.cactus];
      break;
    case ThemeIconsEnum.paw:
      iconContent = theme.icons[ThemeIconsEnum.paw];
      break;
    case ThemeIconsEnum.footprint:
      iconContent = theme.icons[ThemeIconsEnum.footprint];
      break;
    case ThemeIconsEnum['speed-slow']:
      iconContent = theme.icons[ThemeIconsEnum['speed-slow']];
      break;
    case ThemeIconsEnum['speed-medium']:
      iconContent = theme.icons[ThemeIconsEnum['speed-medium']];
      break;
    case ThemeIconsEnum['speed-fast']:
      iconContent = theme.icons[ThemeIconsEnum['speed-fast']];
      break;
    case ThemeIconsEnum.rocket:
      iconContent = theme.icons[ThemeIconsEnum.rocket];
      break;
    case ThemeIconsEnum.hammer2:
      iconContent = theme.icons[ThemeIconsEnum.hammer2];
      break;
    case ThemeIconsEnum.balance:
      iconContent = theme.icons[ThemeIconsEnum.balance];
      break;
    case ThemeIconsEnum.briefcase:
      iconContent = theme.icons[ThemeIconsEnum.briefcase];
      break;
    case ThemeIconsEnum['luggage-weight']:
      iconContent = theme.icons[ThemeIconsEnum['luggage-weight']];
      break;
    case ThemeIconsEnum.dolly:
      iconContent = theme.icons[ThemeIconsEnum.dolly];
      break;
    case ThemeIconsEnum.plane:
      iconContent = theme.icons[ThemeIconsEnum.plane];
      break;
    case ThemeIconsEnum['plane-crossed']:
      iconContent = theme.icons[ThemeIconsEnum['plane-crossed']];
      break;
    case ThemeIconsEnum.helicopter:
      iconContent = theme.icons[ThemeIconsEnum.helicopter];
      break;
    case ThemeIconsEnum['traffic-lights']:
      iconContent = theme.icons[ThemeIconsEnum['traffic-lights']];
      break;
    case ThemeIconsEnum.siren:
      iconContent = theme.icons[ThemeIconsEnum.siren];
      break;
    case ThemeIconsEnum.road:
      iconContent = theme.icons[ThemeIconsEnum.road];
      break;
    case ThemeIconsEnum.engine:
      iconContent = theme.icons[ThemeIconsEnum.engine];
      break;
    case ThemeIconsEnum['oil-pressure']:
      iconContent = theme.icons[ThemeIconsEnum['oil-pressure']];
      break;
    case ThemeIconsEnum['coolant-temperature']:
      iconContent = theme.icons[ThemeIconsEnum['coolant-temperature']];
      break;
    case ThemeIconsEnum['car-battery']:
      iconContent = theme.icons[ThemeIconsEnum['car-battery']];
      break;
    case ThemeIconsEnum.gas:
      iconContent = theme.icons[ThemeIconsEnum.gas];
      break;
    case ThemeIconsEnum.gallon:
      iconContent = theme.icons[ThemeIconsEnum.gallon];
      break;
    case ThemeIconsEnum.transmission:
      iconContent = theme.icons[ThemeIconsEnum.transmission];
      break;
    case ThemeIconsEnum.car:
      iconContent = theme.icons[ThemeIconsEnum.car];
      break;
    case ThemeIconsEnum['car-wash']:
      iconContent = theme.icons[ThemeIconsEnum['car-wash']];
      break;
    case ThemeIconsEnum['car-wash2']:
      iconContent = theme.icons[ThemeIconsEnum['car-wash2']];
      break;
    case ThemeIconsEnum.bus:
      iconContent = theme.icons[ThemeIconsEnum.bus];
      break;
    case ThemeIconsEnum.bus2:
      iconContent = theme.icons[ThemeIconsEnum.bus2];
      break;
    case ThemeIconsEnum.car2:
      iconContent = theme.icons[ThemeIconsEnum.car2];
      break;
    case ThemeIconsEnum.parking:
      iconContent = theme.icons[ThemeIconsEnum.parking];
      break;
    case ThemeIconsEnum['car-lock']:
      iconContent = theme.icons[ThemeIconsEnum['car-lock']];
      break;
    case ThemeIconsEnum.taxi:
      iconContent = theme.icons[ThemeIconsEnum.taxi];
      break;
    case ThemeIconsEnum['car-siren']:
      iconContent = theme.icons[ThemeIconsEnum['car-siren']];
      break;
    case ThemeIconsEnum['car-wash3']:
      iconContent = theme.icons[ThemeIconsEnum['car-wash3']];
      break;
    case ThemeIconsEnum['car-wash4']:
      iconContent = theme.icons[ThemeIconsEnum['car-wash4']];
      break;
    case ThemeIconsEnum.ambulance:
      iconContent = theme.icons[ThemeIconsEnum.ambulance];
      break;
    case ThemeIconsEnum.truck:
      iconContent = theme.icons[ThemeIconsEnum.truck];
      break;
    case ThemeIconsEnum.trailer:
      iconContent = theme.icons[ThemeIconsEnum.trailer];
      break;
    case ThemeIconsEnum['scale-truck']:
      iconContent = theme.icons[ThemeIconsEnum['scale-truck']];
      break;
    case ThemeIconsEnum.train:
      iconContent = theme.icons[ThemeIconsEnum.train];
      break;
    case ThemeIconsEnum.ship:
      iconContent = theme.icons[ThemeIconsEnum.ship];
      break;
    case ThemeIconsEnum.ship2:
      iconContent = theme.icons[ThemeIconsEnum.ship2];
      break;
    case ThemeIconsEnum.anchor:
      iconContent = theme.icons[ThemeIconsEnum.anchor];
      break;
    case ThemeIconsEnum.boat:
      iconContent = theme.icons[ThemeIconsEnum.boat];
      break;
    case ThemeIconsEnum.bicycle:
      iconContent = theme.icons[ThemeIconsEnum.bicycle];
      break;
    case ThemeIconsEnum.bicycle2:
      iconContent = theme.icons[ThemeIconsEnum.bicycle2];
      break;
    case ThemeIconsEnum.dumbbell:
      iconContent = theme.icons[ThemeIconsEnum.dumbbell];
      break;
    case ThemeIconsEnum['bench-press']:
      iconContent = theme.icons[ThemeIconsEnum['bench-press']];
      break;
    case ThemeIconsEnum.swim:
      iconContent = theme.icons[ThemeIconsEnum.swim];
      break;
    case ThemeIconsEnum.football:
      iconContent = theme.icons[ThemeIconsEnum.football];
      break;
    case ThemeIconsEnum['baseball-bat']:
      iconContent = theme.icons[ThemeIconsEnum['baseball-bat']];
      break;
    case ThemeIconsEnum.baseball:
      iconContent = theme.icons[ThemeIconsEnum.baseball];
      break;
    case ThemeIconsEnum.tennis:
      iconContent = theme.icons[ThemeIconsEnum.tennis];
      break;
    case ThemeIconsEnum.tennis2:
      iconContent = theme.icons[ThemeIconsEnum.tennis2];
      break;
    case ThemeIconsEnum['ping-pong']:
      iconContent = theme.icons[ThemeIconsEnum['ping-pong']];
      break;
    case ThemeIconsEnum.hockey:
      iconContent = theme.icons[ThemeIconsEnum.hockey];
      break;
    case ThemeIconsEnum['8ball']:
      iconContent = theme.icons[ThemeIconsEnum['8ball']];
      break;
    case ThemeIconsEnum.bowling:
      iconContent = theme.icons[ThemeIconsEnum.bowling];
      break;
    case ThemeIconsEnum['bowling-pins']:
      iconContent = theme.icons[ThemeIconsEnum['bowling-pins']];
      break;
    case ThemeIconsEnum.golf:
      iconContent = theme.icons[ThemeIconsEnum.golf];
      break;
    case ThemeIconsEnum.golf2:
      iconContent = theme.icons[ThemeIconsEnum.golf2];
      break;
    case ThemeIconsEnum.archery:
      iconContent = theme.icons[ThemeIconsEnum.archery];
      break;
    case ThemeIconsEnum.slingshot:
      iconContent = theme.icons[ThemeIconsEnum.slingshot];
      break;
    case ThemeIconsEnum.soccer:
      iconContent = theme.icons[ThemeIconsEnum.soccer];
      break;
    case ThemeIconsEnum.basketball:
      iconContent = theme.icons[ThemeIconsEnum.basketball];
      break;
    case ThemeIconsEnum.cube:
      iconContent = theme.icons[ThemeIconsEnum.cube];
      break;
    case ThemeIconsEnum['3d-rotate']:
      iconContent = theme.icons[ThemeIconsEnum['3d-rotate']];
      break;
    case ThemeIconsEnum.puzzle:
      iconContent = theme.icons[ThemeIconsEnum.puzzle];
      break;
    case ThemeIconsEnum.glasses:
      iconContent = theme.icons[ThemeIconsEnum.glasses];
      break;
    case ThemeIconsEnum.glasses2:
      iconContent = theme.icons[ThemeIconsEnum.glasses2];
      break;
    case ThemeIconsEnum.accessibility:
      iconContent = theme.icons[ThemeIconsEnum.accessibility];
      break;
    case ThemeIconsEnum.wheelchair:
      iconContent = theme.icons[ThemeIconsEnum.wheelchair];
      break;
    case ThemeIconsEnum.wall:
      iconContent = theme.icons[ThemeIconsEnum.wall];
      break;
    case ThemeIconsEnum.fence:
      iconContent = theme.icons[ThemeIconsEnum.fence];
      break;
    case ThemeIconsEnum.wall2:
      iconContent = theme.icons[ThemeIconsEnum.wall2];
      break;
    case ThemeIconsEnum.icons:
      iconContent = theme.icons[ThemeIconsEnum.icons];
      break;
    case ThemeIconsEnum['resize-handle']:
      iconContent = theme.icons[ThemeIconsEnum['resize-handle']];
      break;
    case ThemeIconsEnum.icons2:
      iconContent = theme.icons[ThemeIconsEnum.icons2];
      break;
    case ThemeIconsEnum.select:
      iconContent = theme.icons[ThemeIconsEnum.select];
      break;
    case ThemeIconsEnum.select2:
      iconContent = theme.icons[ThemeIconsEnum.select2];
      break;
    case ThemeIconsEnum['site-map']:
      iconContent = theme.icons[ThemeIconsEnum['site-map']];
      break;
    case ThemeIconsEnum.earth:
      iconContent = theme.icons[ThemeIconsEnum.earth];
      break;
    case ThemeIconsEnum['earth-lock']:
      iconContent = theme.icons[ThemeIconsEnum['earth-lock']];
      break;
    case ThemeIconsEnum.network:
      iconContent = theme.icons[ThemeIconsEnum.network];
      break;
    case ThemeIconsEnum['network-lock']:
      iconContent = theme.icons[ThemeIconsEnum['network-lock']];
      break;
    case ThemeIconsEnum.planet:
      iconContent = theme.icons[ThemeIconsEnum.planet];
      break;
    case ThemeIconsEnum.happy:
      iconContent = theme.icons[ThemeIconsEnum.happy];
      break;
    case ThemeIconsEnum.smile:
      iconContent = theme.icons[ThemeIconsEnum.smile];
      break;
    case ThemeIconsEnum.grin:
      iconContent = theme.icons[ThemeIconsEnum.grin];
      break;
    case ThemeIconsEnum.tongue:
      iconContent = theme.icons[ThemeIconsEnum.tongue];
      break;
    case ThemeIconsEnum.sad:
      iconContent = theme.icons[ThemeIconsEnum.sad];
      break;
    case ThemeIconsEnum.wink:
      iconContent = theme.icons[ThemeIconsEnum.wink];
      break;
    case ThemeIconsEnum.dream:
      iconContent = theme.icons[ThemeIconsEnum.dream];
      break;
    case ThemeIconsEnum.shocked:
      iconContent = theme.icons[ThemeIconsEnum.shocked];
      break;
    case ThemeIconsEnum.shocked2:
      iconContent = theme.icons[ThemeIconsEnum.shocked2];
      break;
    case ThemeIconsEnum.tongue2:
      iconContent = theme.icons[ThemeIconsEnum.tongue2];
      break;
    case ThemeIconsEnum.neutral:
      iconContent = theme.icons[ThemeIconsEnum.neutral];
      break;
    case ThemeIconsEnum['happy-grin']:
      iconContent = theme.icons[ThemeIconsEnum['happy-grin']];
      break;
    case ThemeIconsEnum.cool:
      iconContent = theme.icons[ThemeIconsEnum.cool];
      break;
    case ThemeIconsEnum.mad:
      iconContent = theme.icons[ThemeIconsEnum.mad];
      break;
    case ThemeIconsEnum['grin-evil']:
      iconContent = theme.icons[ThemeIconsEnum['grin-evil']];
      break;
    case ThemeIconsEnum.evil:
      iconContent = theme.icons[ThemeIconsEnum.evil];
      break;
    case ThemeIconsEnum.wow:
      iconContent = theme.icons[ThemeIconsEnum.wow];
      break;
    case ThemeIconsEnum.annoyed:
      iconContent = theme.icons[ThemeIconsEnum.annoyed];
      break;
    case ThemeIconsEnum.wondering:
      iconContent = theme.icons[ThemeIconsEnum.wondering];
      break;
    case ThemeIconsEnum.confused:
      iconContent = theme.icons[ThemeIconsEnum.confused];
      break;
    case ThemeIconsEnum.zipped:
      iconContent = theme.icons[ThemeIconsEnum.zipped];
      break;
    case ThemeIconsEnum.grumpy:
      iconContent = theme.icons[ThemeIconsEnum.grumpy];
      break;
    case ThemeIconsEnum.mustache:
      iconContent = theme.icons[ThemeIconsEnum.mustache];
      break;
    case ThemeIconsEnum['tombstone-hipster']:
      iconContent = theme.icons[ThemeIconsEnum['tombstone-hipster']];
      break;
    case ThemeIconsEnum.tombstone:
      iconContent = theme.icons[ThemeIconsEnum.tombstone];
      break;
    case ThemeIconsEnum.ghost:
      iconContent = theme.icons[ThemeIconsEnum.ghost];
      break;
    case ThemeIconsEnum['ghost-hipster']:
      iconContent = theme.icons[ThemeIconsEnum['ghost-hipster']];
      break;
    case ThemeIconsEnum.halloween:
      iconContent = theme.icons[ThemeIconsEnum.halloween];
      break;
    case ThemeIconsEnum.christmas:
      iconContent = theme.icons[ThemeIconsEnum.christmas];
      break;
    case ThemeIconsEnum['easter-egg']:
      iconContent = theme.icons[ThemeIconsEnum['easter-egg']];
      break;
    case ThemeIconsEnum.mustache2:
      iconContent = theme.icons[ThemeIconsEnum.mustache2];
      break;
    case ThemeIconsEnum['mustache-glasses']:
      iconContent = theme.icons[ThemeIconsEnum['mustache-glasses']];
      break;
    case ThemeIconsEnum.pipe:
      iconContent = theme.icons[ThemeIconsEnum.pipe];
      break;
    case ThemeIconsEnum.alarm:
      iconContent = theme.icons[ThemeIconsEnum.alarm];
      break;
    case ThemeIconsEnum['alarm-add']:
      iconContent = theme.icons[ThemeIconsEnum['alarm-add']];
      break;
    case ThemeIconsEnum['alarm-snooze']:
      iconContent = theme.icons[ThemeIconsEnum['alarm-snooze']];
      break;
    case ThemeIconsEnum['alarm-ringing']:
      iconContent = theme.icons[ThemeIconsEnum['alarm-ringing']];
      break;
    case ThemeIconsEnum.bullhorn:
      iconContent = theme.icons[ThemeIconsEnum.bullhorn];
      break;
    case ThemeIconsEnum.hearing:
      iconContent = theme.icons[ThemeIconsEnum.hearing];
      break;
    case ThemeIconsEnum['volume-high']:
      iconContent = theme.icons[ThemeIconsEnum['volume-high']];
      break;
    case ThemeIconsEnum['volume-medium']:
      iconContent = theme.icons[ThemeIconsEnum['volume-medium']];
      break;
    case ThemeIconsEnum['volume-low']:
      iconContent = theme.icons[ThemeIconsEnum['volume-low']];
      break;
    case ThemeIconsEnum.volume:
      iconContent = theme.icons[ThemeIconsEnum.volume];
      break;
    case ThemeIconsEnum.mute:
      iconContent = theme.icons[ThemeIconsEnum.mute];
      break;
    case ThemeIconsEnum.lan:
      iconContent = theme.icons[ThemeIconsEnum.lan];
      break;
    case ThemeIconsEnum.lan2:
      iconContent = theme.icons[ThemeIconsEnum.lan2];
      break;
    case ThemeIconsEnum.wifi:
      iconContent = theme.icons[ThemeIconsEnum.wifi];
      break;
    case ThemeIconsEnum['wifi-lock']:
      iconContent = theme.icons[ThemeIconsEnum['wifi-lock']];
      break;
    case ThemeIconsEnum['wifi-blocked']:
      iconContent = theme.icons[ThemeIconsEnum['wifi-blocked']];
      break;
    case ThemeIconsEnum['wifi-mid']:
      iconContent = theme.icons[ThemeIconsEnum['wifi-mid']];
      break;
    case ThemeIconsEnum['wifi-low']:
      iconContent = theme.icons[ThemeIconsEnum['wifi-low']];
      break;
    case ThemeIconsEnum['wifi-low2']:
      iconContent = theme.icons[ThemeIconsEnum['wifi-low2']];
      break;
    case ThemeIconsEnum['wifi-alert']:
      iconContent = theme.icons[ThemeIconsEnum['wifi-alert']];
      break;
    case ThemeIconsEnum['wifi-alert-mid']:
      iconContent = theme.icons[ThemeIconsEnum['wifi-alert-mid']];
      break;
    case ThemeIconsEnum['wifi-alert-low']:
      iconContent = theme.icons[ThemeIconsEnum['wifi-alert-low']];
      break;
    case ThemeIconsEnum['wifi-alert-low2']:
      iconContent = theme.icons[ThemeIconsEnum['wifi-alert-low2']];
      break;
    case ThemeIconsEnum.stream:
      iconContent = theme.icons[ThemeIconsEnum.stream];
      break;
    case ThemeIconsEnum['stream-check']:
      iconContent = theme.icons[ThemeIconsEnum['stream-check']];
      break;
    case ThemeIconsEnum['stream-error']:
      iconContent = theme.icons[ThemeIconsEnum['stream-error']];
      break;
    case ThemeIconsEnum['stream-alert']:
      iconContent = theme.icons[ThemeIconsEnum['stream-alert']];
      break;
    case ThemeIconsEnum.communication:
      iconContent = theme.icons[ThemeIconsEnum.communication];
      break;
    case ThemeIconsEnum['communication-crossed']:
      iconContent = theme.icons[ThemeIconsEnum['communication-crossed']];
      break;
    case ThemeIconsEnum.broadcast:
      iconContent = theme.icons[ThemeIconsEnum.broadcast];
      break;
    case ThemeIconsEnum.antenna:
      iconContent = theme.icons[ThemeIconsEnum.antenna];
      break;
    case ThemeIconsEnum.satellite:
      iconContent = theme.icons[ThemeIconsEnum.satellite];
      break;
    case ThemeIconsEnum.satellite2:
      iconContent = theme.icons[ThemeIconsEnum.satellite2];
      break;
    case ThemeIconsEnum.mic:
      iconContent = theme.icons[ThemeIconsEnum.mic];
      break;
    case ThemeIconsEnum['mic-mute']:
      iconContent = theme.icons[ThemeIconsEnum['mic-mute']];
      break;
    case ThemeIconsEnum.mic2:
      iconContent = theme.icons[ThemeIconsEnum.mic2];
      break;
    case ThemeIconsEnum.spotlights:
      iconContent = theme.icons[ThemeIconsEnum.spotlights];
      break;
    case ThemeIconsEnum.hourglass:
      iconContent = theme.icons[ThemeIconsEnum.hourglass];
      break;
    case ThemeIconsEnum.loading:
      iconContent = theme.icons[ThemeIconsEnum.loading];
      break;
    case ThemeIconsEnum.loading2:
      iconContent = theme.icons[ThemeIconsEnum.loading2];
      break;
    case ThemeIconsEnum.loading3:
      iconContent = theme.icons[ThemeIconsEnum.loading3];
      break;
    case ThemeIconsEnum.refresh:
      iconContent = theme.icons[ThemeIconsEnum.refresh];
      break;
    case ThemeIconsEnum.refresh2:
      iconContent = theme.icons[ThemeIconsEnum.refresh2];
      break;
    case ThemeIconsEnum.undo:
      iconContent = theme.icons[ThemeIconsEnum.undo];
      break;
    case ThemeIconsEnum.redo:
      iconContent = theme.icons[ThemeIconsEnum.redo];
      break;
    case ThemeIconsEnum.jump2:
      iconContent = theme.icons[ThemeIconsEnum.jump2];
      break;
    case ThemeIconsEnum.undo2:
      iconContent = theme.icons[ThemeIconsEnum.undo2];
      break;
    case ThemeIconsEnum.redo2:
      iconContent = theme.icons[ThemeIconsEnum.redo2];
      break;
    case ThemeIconsEnum.sync:
      iconContent = theme.icons[ThemeIconsEnum.sync];
      break;
    case ThemeIconsEnum['repeat-one2']:
      iconContent = theme.icons[ThemeIconsEnum['repeat-one2']];
      break;
    case ThemeIconsEnum['sync-crossed']:
      iconContent = theme.icons[ThemeIconsEnum['sync-crossed']];
      break;
    case ThemeIconsEnum.sync2:
      iconContent = theme.icons[ThemeIconsEnum.sync2];
      break;
    case ThemeIconsEnum['repeat-one3']:
      iconContent = theme.icons[ThemeIconsEnum['repeat-one3']];
      break;
    case ThemeIconsEnum['sync-crossed2']:
      iconContent = theme.icons[ThemeIconsEnum['sync-crossed2']];
      break;
    case theme.icons[ThemeIconsEnum.return]:
      iconContent = theme.icons[ThemeIconsEnum.return];
      break;
    case theme.icons[ThemeIconsEnum.return2]:
      iconContent = theme.icons[ThemeIconsEnum.return2];
      break;
    case ThemeIconsEnum.refund:
      iconContent = theme.icons[ThemeIconsEnum.refund];
      break;
    case ThemeIconsEnum.history:
      iconContent = theme.icons[ThemeIconsEnum.history];
      break;
    case ThemeIconsEnum.history2:
      iconContent = theme.icons[ThemeIconsEnum.history2];
      break;
    case ThemeIconsEnum['self-timer']:
      iconContent = theme.icons[ThemeIconsEnum['self-timer']];
      break;
    case ThemeIconsEnum.clock:
      iconContent = theme.icons[ThemeIconsEnum.clock];
      break;
    case ThemeIconsEnum.clock2:
      iconContent = theme.icons[ThemeIconsEnum.clock2];
      break;
    case ThemeIconsEnum.clock3:
      iconContent = theme.icons[ThemeIconsEnum.clock3];
      break;
    case ThemeIconsEnum.watch:
      iconContent = theme.icons[ThemeIconsEnum.watch];
      break;
    case ThemeIconsEnum.alarm2:
      iconContent = theme.icons[ThemeIconsEnum.alarm2];
      break;
    case ThemeIconsEnum['alarm-add2']:
      iconContent = theme.icons[ThemeIconsEnum['alarm-add2']];
      break;
    case ThemeIconsEnum['alarm-remove']:
      iconContent = theme.icons[ThemeIconsEnum['alarm-remove']];
      break;
    case ThemeIconsEnum['alarm-check']:
      iconContent = theme.icons[ThemeIconsEnum['alarm-check']];
      break;
    case ThemeIconsEnum['alarm-error']:
      iconContent = theme.icons[ThemeIconsEnum['alarm-error']];
      break;
    case ThemeIconsEnum.timer:
      iconContent = theme.icons[ThemeIconsEnum.timer];
      break;
    case ThemeIconsEnum['timer-crossed']:
      iconContent = theme.icons[ThemeIconsEnum['timer-crossed']];
      break;
    case ThemeIconsEnum.timer2:
      iconContent = theme.icons[ThemeIconsEnum.timer2];
      break;
    case ThemeIconsEnum['timer-crossed2']:
      iconContent = theme.icons[ThemeIconsEnum['timer-crossed2']];
      break;
    case ThemeIconsEnum.download:
      iconContent = theme.icons[ThemeIconsEnum.download];
      break;
    case ThemeIconsEnum.upload:
      iconContent = theme.icons[ThemeIconsEnum.upload];
      break;
    case ThemeIconsEnum.download2:
      iconContent = theme.icons[ThemeIconsEnum.download2];
      break;
    case ThemeIconsEnum.upload2:
      iconContent = theme.icons[ThemeIconsEnum.upload2];
      break;
    case ThemeIconsEnum['enter-up']:
      iconContent = theme.icons[ThemeIconsEnum['enter-up']];
      break;
    case ThemeIconsEnum['enter-down']:
      iconContent = theme.icons[ThemeIconsEnum['enter-down']];
      break;
    case ThemeIconsEnum['enter-left']:
      iconContent = theme.icons[ThemeIconsEnum['enter-left']];
      break;
    case ThemeIconsEnum['enter-right']:
      iconContent = theme.icons[ThemeIconsEnum['enter-right']];
      break;
    case ThemeIconsEnum['exit-up']:
      iconContent = theme.icons[ThemeIconsEnum['exit-up']];
      break;
    case ThemeIconsEnum['exit-down']:
      iconContent = theme.icons[ThemeIconsEnum['exit-down']];
      break;
    case ThemeIconsEnum['exit-left']:
      iconContent = theme.icons[ThemeIconsEnum['exit-left']];
      break;
    case ThemeIconsEnum['exit-right']:
      iconContent = theme.icons[ThemeIconsEnum['exit-right']];
      break;
    case ThemeIconsEnum['enter-up2']:
      iconContent = theme.icons[ThemeIconsEnum['enter-up2']];
      break;
    case ThemeIconsEnum['enter-down2']:
      iconContent = theme.icons[ThemeIconsEnum['enter-down2']];
      break;
    case ThemeIconsEnum['enter-vertical']:
      iconContent = theme.icons[ThemeIconsEnum['enter-vertical']];
      break;
    case ThemeIconsEnum['enter-left2']:
      iconContent = theme.icons[ThemeIconsEnum['enter-left2']];
      break;
    case ThemeIconsEnum['enter-right2']:
      iconContent = theme.icons[ThemeIconsEnum['enter-right2']];
      break;
    case ThemeIconsEnum['enter-horizontal']:
      iconContent = theme.icons[ThemeIconsEnum['enter-horizontal']];
      break;
    case ThemeIconsEnum['exit-up2']:
      iconContent = theme.icons[ThemeIconsEnum['exit-up2']];
      break;
    case ThemeIconsEnum['exit-down2']:
      iconContent = theme.icons[ThemeIconsEnum['exit-down2']];
      break;
    case ThemeIconsEnum['exit-left2']:
      iconContent = theme.icons[ThemeIconsEnum['exit-left2']];
      break;
    case ThemeIconsEnum['exit-right2']:
      iconContent = theme.icons[ThemeIconsEnum['exit-right2']];
      break;
    case ThemeIconsEnum.cli:
      iconContent = theme.icons[ThemeIconsEnum.cli];
      break;
    case ThemeIconsEnum.bug:
      iconContent = theme.icons[ThemeIconsEnum.bug];
      break;
    case ThemeIconsEnum.code:
      iconContent = theme.icons[ThemeIconsEnum.code];
      break;
    case ThemeIconsEnum['file-code']:
      iconContent = theme.icons[ThemeIconsEnum['file-code']];
      break;
    case ThemeIconsEnum['file-image']:
      iconContent = theme.icons[ThemeIconsEnum['file-image']];
      break;
    case ThemeIconsEnum['file-zip']:
      iconContent = theme.icons[ThemeIconsEnum['file-zip']];
      break;
    case ThemeIconsEnum['file-audio']:
      iconContent = theme.icons[ThemeIconsEnum['file-audio']];
      break;
    case ThemeIconsEnum['file-video']:
      iconContent = theme.icons[ThemeIconsEnum['file-video']];
      break;
    case ThemeIconsEnum['file-preview']:
      iconContent = theme.icons[ThemeIconsEnum['file-preview']];
      break;
    case ThemeIconsEnum['file-charts']:
      iconContent = theme.icons[ThemeIconsEnum['file-charts']];
      break;
    case ThemeIconsEnum['file-stats']:
      iconContent = theme.icons[ThemeIconsEnum['file-stats']];
      break;
    case ThemeIconsEnum['file-spreadsheet']:
      iconContent = theme.icons[ThemeIconsEnum['file-spreadsheet']];
      break;
    case ThemeIconsEnum.link:
      iconContent = theme.icons[ThemeIconsEnum.link];
      break;
    case ThemeIconsEnum.unlink:
      iconContent = theme.icons[ThemeIconsEnum.unlink];
      break;
    case ThemeIconsEnum.link2:
      iconContent = theme.icons[ThemeIconsEnum.link2];
      break;
    case ThemeIconsEnum.unlink2:
      iconContent = theme.icons[ThemeIconsEnum.unlink2];
      break;
    case ThemeIconsEnum['thumbs-up']:
      iconContent = theme.icons[ThemeIconsEnum['thumbs-up']];
      break;
    case ThemeIconsEnum['thumbs-down']:
      iconContent = theme.icons[ThemeIconsEnum['thumbs-down']];
      break;
    case ThemeIconsEnum['thumbs-up2']:
      iconContent = theme.icons[ThemeIconsEnum['thumbs-up2']];
      break;
    case ThemeIconsEnum['thumbs-down2']:
      iconContent = theme.icons[ThemeIconsEnum['thumbs-down2']];
      break;
    case ThemeIconsEnum['thumbs-up3']:
      iconContent = theme.icons[ThemeIconsEnum['thumbs-up3']];
      break;
    case ThemeIconsEnum['thumbs-down3']:
      iconContent = theme.icons[ThemeIconsEnum['thumbs-down3']];
      break;
    case ThemeIconsEnum.share:
      iconContent = theme.icons[ThemeIconsEnum.share];
      break;
    case ThemeIconsEnum.share2:
      iconContent = theme.icons[ThemeIconsEnum.share2];
      break;
    case ThemeIconsEnum.share3:
      iconContent = theme.icons[ThemeIconsEnum.share3];
      break;
    case ThemeIconsEnum.magnifier:
      iconContent = theme.icons[ThemeIconsEnum.magnifier];
      break;
    case ThemeIconsEnum['file-search']:
      iconContent = theme.icons[ThemeIconsEnum['file-search']];
      break;
    case ThemeIconsEnum['find-replace']:
      iconContent = theme.icons[ThemeIconsEnum['find-replace']];
      break;
    case ThemeIconsEnum['zoom-in']:
      iconContent = theme.icons[ThemeIconsEnum['zoom-in']];
      break;
    case ThemeIconsEnum['zoom-out']:
      iconContent = theme.icons[ThemeIconsEnum['zoom-out']];
      break;
    case ThemeIconsEnum.loupe:
      iconContent = theme.icons[ThemeIconsEnum.loupe];
      break;
    case ThemeIconsEnum['loupe-zoom-in']:
      iconContent = theme.icons[ThemeIconsEnum['loupe-zoom-in']];
      break;
    case ThemeIconsEnum['loupe-zoom-out']:
      iconContent = theme.icons[ThemeIconsEnum['loupe-zoom-out']];
      break;
    case ThemeIconsEnum.cross:
      iconContent = theme.icons[ThemeIconsEnum.cross];
      break;
    case ThemeIconsEnum.menu:
      iconContent = theme.icons[ThemeIconsEnum.menu];
      break;
    case ThemeIconsEnum.list:
      iconContent = theme.icons[ThemeIconsEnum.list];
      break;
    case ThemeIconsEnum.list2:
      iconContent = theme.icons[ThemeIconsEnum.list2];
      break;
    case ThemeIconsEnum.list3:
      iconContent = theme.icons[ThemeIconsEnum.list3];
      break;
    case ThemeIconsEnum.menu2:
      iconContent = theme.icons[ThemeIconsEnum.menu2];
      break;
    case ThemeIconsEnum.list4:
      iconContent = theme.icons[ThemeIconsEnum.list4];
      break;
    case ThemeIconsEnum.menu3:
      iconContent = theme.icons[ThemeIconsEnum.menu3];
      break;
    case ThemeIconsEnum.exclamation:
      iconContent = theme.icons[ThemeIconsEnum.exclamation];
      break;
    case ThemeIconsEnum.question:
      iconContent = theme.icons[ThemeIconsEnum.question];
      break;
    case ThemeIconsEnum.check:
      iconContent = theme.icons[ThemeIconsEnum.check];
      break;
    case ThemeIconsEnum.cross2:
      iconContent = theme.icons[ThemeIconsEnum.cross2];
      break;
    case ThemeIconsEnum.plus:
      iconContent = theme.icons[ThemeIconsEnum.plus];
      break;
    case ThemeIconsEnum.minus:
      iconContent = theme.icons[ThemeIconsEnum.minus];
      break;
    case ThemeIconsEnum.percent:
      iconContent = theme.icons[ThemeIconsEnum.percent];
      break;
    case ThemeIconsEnum['chevron-up']:
      iconContent = theme.icons[ThemeIconsEnum['chevron-up']];
      break;
    case ThemeIconsEnum['chevron-down']:
      iconContent = theme.icons[ThemeIconsEnum['chevron-down']];
      break;
    case ThemeIconsEnum['chevron-left']:
      iconContent = theme.icons[ThemeIconsEnum['chevron-left']];
      break;
    case ThemeIconsEnum['chevron-right']:
      iconContent = theme.icons[ThemeIconsEnum['chevron-right']];
      break;
    case ThemeIconsEnum['chevrons-expand-vertical']:
      iconContent = theme.icons[ThemeIconsEnum['chevrons-expand-vertical']];
      break;
    case ThemeIconsEnum['chevrons-expand-horizontal']:
      iconContent = theme.icons[ThemeIconsEnum['chevrons-expand-horizontal']];
      break;
    case ThemeIconsEnum['chevrons-contract-vertical']:
      iconContent = theme.icons[ThemeIconsEnum['chevrons-contract-vertical']];
      break;
    case ThemeIconsEnum['chevrons-contract-horizontal']:
      iconContent = theme.icons[ThemeIconsEnum['chevrons-contract-horizontal']];
      break;
    case ThemeIconsEnum['arrow-up']:
      iconContent = theme.icons[ThemeIconsEnum['arrow-up']];
      break;
    case ThemeIconsEnum['arrow-down']:
      iconContent = theme.icons[ThemeIconsEnum['arrow-down']];
      break;
    case ThemeIconsEnum['arrow-left']:
      iconContent = theme.icons[ThemeIconsEnum['arrow-left']];
      break;
    case ThemeIconsEnum['arrow-right']:
      iconContent = theme.icons[ThemeIconsEnum['arrow-right']];
      break;
    case ThemeIconsEnum['arrow-up-right']:
      iconContent = theme.icons[ThemeIconsEnum['arrow-up-right']];
      break;
    case ThemeIconsEnum['arrows-merge']:
      iconContent = theme.icons[ThemeIconsEnum['arrows-merge']];
      break;
    case ThemeIconsEnum['arrows-split']:
      iconContent = theme.icons[ThemeIconsEnum['arrows-split']];
      break;
    case ThemeIconsEnum['arrow-divert']:
      iconContent = theme.icons[ThemeIconsEnum['arrow-divert']];
      break;
    case theme.icons[ThemeIconsEnum['arrow-return']]:
      iconContent = theme.icons[ThemeIconsEnum['arrow-return']];
      break;
    case ThemeIconsEnum.expand:
      iconContent = theme.icons[ThemeIconsEnum.expand];
      break;
    case ThemeIconsEnum.contract:
      iconContent = theme.icons[ThemeIconsEnum.contract];
      break;
    case ThemeIconsEnum.expand2:
      iconContent = theme.icons[ThemeIconsEnum.expand2];
      break;
    case ThemeIconsEnum.contract2:
      iconContent = theme.icons[ThemeIconsEnum.contract2];
      break;
    case ThemeIconsEnum.move:
      iconContent = theme.icons[ThemeIconsEnum.move];
      break;
    case ThemeIconsEnum.tab:
      iconContent = theme.icons[ThemeIconsEnum.tab];
      break;
    case ThemeIconsEnum['arrow-wave']:
      iconContent = theme.icons[ThemeIconsEnum['arrow-wave']];
      break;
    case ThemeIconsEnum.expand3:
      iconContent = theme.icons[ThemeIconsEnum.expand3];
      break;
    case ThemeIconsEnum.expand4:
      iconContent = theme.icons[ThemeIconsEnum.expand4];
      break;
    case ThemeIconsEnum.contract3:
      iconContent = theme.icons[ThemeIconsEnum.contract3];
      break;
    case ThemeIconsEnum.notification:
      iconContent = theme.icons[ThemeIconsEnum.notification];
      break;
    case ThemeIconsEnum.warning:
      iconContent = theme.icons[ThemeIconsEnum.warning];
      break;
    case ThemeIconsEnum['notification-circle']:
      iconContent = theme.icons[ThemeIconsEnum['notification-circle']];
      break;
    case ThemeIconsEnum['question-circle']:
      iconContent = theme.icons[ThemeIconsEnum['question-circle']];
      break;
    case ThemeIconsEnum['menu-circle']:
      iconContent = theme.icons[ThemeIconsEnum['menu-circle']];
      break;
    case ThemeIconsEnum['checkmark-circle']:
      iconContent = theme.icons[ThemeIconsEnum['checkmark-circle']];
      break;
    case ThemeIconsEnum['cross-circle']:
      iconContent = theme.icons[ThemeIconsEnum['cross-circle']];
      break;
    case ThemeIconsEnum['plus-circle']:
      iconContent = theme.icons[ThemeIconsEnum['plus-circle']];
      break;
    case ThemeIconsEnum['circle-minus']:
      iconContent = theme.icons[ThemeIconsEnum['circle-minus']];
      break;
    case ThemeIconsEnum['percent-circle']:
      iconContent = theme.icons[ThemeIconsEnum['percent-circle']];
      break;
    case ThemeIconsEnum['arrow-up-circle']:
      iconContent = theme.icons[ThemeIconsEnum['arrow-up-circle']];
      break;
    case ThemeIconsEnum['arrow-down-circle']:
      iconContent = theme.icons[ThemeIconsEnum['arrow-down-circle']];
      break;
    case ThemeIconsEnum['arrow-left-circle']:
      iconContent = theme.icons[ThemeIconsEnum['arrow-left-circle']];
      break;
    case ThemeIconsEnum['arrow-right-circle']:
      iconContent = theme.icons[ThemeIconsEnum['arrow-right-circle']];
      break;
    case ThemeIconsEnum['chevron-up-circle']:
      iconContent = theme.icons[ThemeIconsEnum['chevron-up-circle']];
      break;
    case ThemeIconsEnum['chevron-down-circle']:
      iconContent = theme.icons[ThemeIconsEnum['chevron-down-circle']];
      break;
    case ThemeIconsEnum['chevron-left-circle']:
      iconContent = theme.icons[ThemeIconsEnum['chevron-left-circle']];
      break;
    case ThemeIconsEnum['chevron-right-circle']:
      iconContent = theme.icons[ThemeIconsEnum['chevron-right-circle']];
      break;
    case ThemeIconsEnum['backward-circle']:
      iconContent = theme.icons[ThemeIconsEnum['backward-circle']];
      break;
    case ThemeIconsEnum['first-circle']:
      iconContent = theme.icons[ThemeIconsEnum['first-circle']];
      break;
    case ThemeIconsEnum['previous-circle']:
      iconContent = theme.icons[ThemeIconsEnum['previous-circle']];
      break;
    case ThemeIconsEnum['stop-circle']:
      iconContent = theme.icons[ThemeIconsEnum['stop-circle']];
      break;
    case ThemeIconsEnum['play-circle']:
      iconContent = theme.icons[ThemeIconsEnum['play-circle']];
      break;
    case ThemeIconsEnum['pause-circle']:
      iconContent = theme.icons[ThemeIconsEnum['pause-circle']];
      break;
    case ThemeIconsEnum['next-circle']:
      iconContent = theme.icons[ThemeIconsEnum['next-circle']];
      break;
    case ThemeIconsEnum['last-circle']:
      iconContent = theme.icons[ThemeIconsEnum['last-circle']];
      break;
    case ThemeIconsEnum['forward-circle']:
      iconContent = theme.icons[ThemeIconsEnum['forward-circle']];
      break;
    case ThemeIconsEnum['eject-circle']:
      iconContent = theme.icons[ThemeIconsEnum['eject-circle']];
      break;
    case ThemeIconsEnum.crop:
      iconContent = theme.icons[ThemeIconsEnum.crop];
      break;
    case ThemeIconsEnum['frame-expand']:
      iconContent = theme.icons[ThemeIconsEnum['frame-expand']];
      break;
    case ThemeIconsEnum['frame-contract']:
      iconContent = theme.icons[ThemeIconsEnum['frame-contract']];
      break;
    case ThemeIconsEnum.focus:
      iconContent = theme.icons[ThemeIconsEnum.focus];
      break;
    case ThemeIconsEnum.transform:
      iconContent = theme.icons[ThemeIconsEnum.transform];
      break;
    case ThemeIconsEnum.grid:
      iconContent = theme.icons[ThemeIconsEnum.grid];
      break;
    case ThemeIconsEnum['grid-crossed']:
      iconContent = theme.icons[ThemeIconsEnum['grid-crossed']];
      break;
    case ThemeIconsEnum.layers:
      iconContent = theme.icons[ThemeIconsEnum.layers];
      break;
    case ThemeIconsEnum['layers-crossed']:
      iconContent = theme.icons[ThemeIconsEnum['layers-crossed']];
      break;
    case ThemeIconsEnum.toggle:
      iconContent = theme.icons[ThemeIconsEnum.toggle];
      break;
    case ThemeIconsEnum.rulers:
      iconContent = theme.icons[ThemeIconsEnum.rulers];
      break;
    case ThemeIconsEnum.ruler:
      iconContent = theme.icons[ThemeIconsEnum.ruler];
      break;
    case ThemeIconsEnum.funnel:
      iconContent = theme.icons[ThemeIconsEnum.funnel];
      break;
    case ThemeIconsEnum['flip-horizontal']:
      iconContent = theme.icons[ThemeIconsEnum['flip-horizontal']];
      break;
    case ThemeIconsEnum['flip-vertical']:
      iconContent = theme.icons[ThemeIconsEnum['flip-vertical']];
      break;
    case ThemeIconsEnum['flip-horizontal2']:
      iconContent = theme.icons[ThemeIconsEnum['flip-horizontal2']];
      break;
    case ThemeIconsEnum['flip-vertical2']:
      iconContent = theme.icons[ThemeIconsEnum['flip-vertical2']];
      break;
    case ThemeIconsEnum.angle:
      iconContent = theme.icons[ThemeIconsEnum.angle];
      break;
    case ThemeIconsEnum.angle2:
      iconContent = theme.icons[ThemeIconsEnum.angle2];
      break;
    case ThemeIconsEnum.subtract:
      iconContent = theme.icons[ThemeIconsEnum.subtract];
      break;
    case ThemeIconsEnum.combine:
      iconContent = theme.icons[ThemeIconsEnum.combine];
      break;
    case ThemeIconsEnum.intersect:
      iconContent = theme.icons[ThemeIconsEnum.intersect];
      break;
    case ThemeIconsEnum.exclude:
      iconContent = theme.icons[ThemeIconsEnum.exclude];
      break;
    case ThemeIconsEnum['align-center-vertical']:
      iconContent = theme.icons[ThemeIconsEnum['align-center-vertical']];
      break;
    case ThemeIconsEnum['align-right']:
      iconContent = theme.icons[ThemeIconsEnum['align-right']];
      break;
    case ThemeIconsEnum['align-bottom']:
      iconContent = theme.icons[ThemeIconsEnum['align-bottom']];
      break;
    case ThemeIconsEnum['align-left']:
      iconContent = theme.icons[ThemeIconsEnum['align-left']];
      break;
    case ThemeIconsEnum['align-center-horizontal']:
      iconContent = theme.icons[ThemeIconsEnum['align-center-horizontal']];
      break;
    case ThemeIconsEnum['align-top']:
      iconContent = theme.icons[ThemeIconsEnum['align-top']];
      break;
    case ThemeIconsEnum.square:
      iconContent = theme.icons[ThemeIconsEnum.square];
      break;
    case ThemeIconsEnum['plus-square']:
      iconContent = theme.icons[ThemeIconsEnum['plus-square']];
      break;
    case ThemeIconsEnum['minus-square']:
      iconContent = theme.icons[ThemeIconsEnum['minus-square']];
      break;
    case ThemeIconsEnum['percent-square']:
      iconContent = theme.icons[ThemeIconsEnum['percent-square']];
      break;
    case ThemeIconsEnum['arrow-up-square']:
      iconContent = theme.icons[ThemeIconsEnum['arrow-up-square']];
      break;
    case ThemeIconsEnum['arrow-down-square']:
      iconContent = theme.icons[ThemeIconsEnum['arrow-down-square']];
      break;
    case ThemeIconsEnum['arrow-left-square']:
      iconContent = theme.icons[ThemeIconsEnum['arrow-left-square']];
      break;
    case ThemeIconsEnum['arrow-right-square']:
      iconContent = theme.icons[ThemeIconsEnum['arrow-right-square']];
      break;
    case ThemeIconsEnum['chevron-up-square']:
      iconContent = theme.icons[ThemeIconsEnum['chevron-up-square']];
      break;
    case ThemeIconsEnum['chevron-down-square']:
      iconContent = theme.icons[ThemeIconsEnum['chevron-down-square']];
      break;
    case ThemeIconsEnum['chevron-left-square']:
      iconContent = theme.icons[ThemeIconsEnum['chevron-left-square']];
      break;
    case ThemeIconsEnum['chevron-right-square']:
      iconContent = theme.icons[ThemeIconsEnum['chevron-right-square']];
      break;
    case ThemeIconsEnum['check-square']:
      iconContent = theme.icons[ThemeIconsEnum['check-square']];
      break;
    case ThemeIconsEnum['cross-square']:
      iconContent = theme.icons[ThemeIconsEnum['cross-square']];
      break;
    case ThemeIconsEnum['menu-square']:
      iconContent = theme.icons[ThemeIconsEnum['menu-square']];
      break;
    case ThemeIconsEnum.prohibited:
      iconContent = theme.icons[ThemeIconsEnum.prohibited];
      break;
    case ThemeIconsEnum.circle:
      iconContent = theme.icons[ThemeIconsEnum.circle];
      break;
    case ThemeIconsEnum['radio-button']:
      iconContent = theme.icons[ThemeIconsEnum['radio-button']];
      break;
    case ThemeIconsEnum.ligature:
      iconContent = theme.icons[ThemeIconsEnum.ligature];
      break;
    case ThemeIconsEnum['text-format']:
      iconContent = theme.icons[ThemeIconsEnum['text-format']];
      break;
    case ThemeIconsEnum['text-format-remove']:
      iconContent = theme.icons[ThemeIconsEnum['text-format-remove']];
      break;
    case ThemeIconsEnum['text-size']:
      iconContent = theme.icons[ThemeIconsEnum['text-size']];
      break;
    case ThemeIconsEnum.bold:
      iconContent = theme.icons[ThemeIconsEnum.bold];
      break;
    case ThemeIconsEnum.italic:
      iconContent = theme.icons[ThemeIconsEnum.italic];
      break;
    case ThemeIconsEnum.underline:
      iconContent = theme.icons[ThemeIconsEnum.underline];
      break;
    case ThemeIconsEnum.strikethrough:
      iconContent = theme.icons[ThemeIconsEnum.strikethrough];
      break;
    case ThemeIconsEnum.highlight:
      iconContent = theme.icons[ThemeIconsEnum.highlight];
      break;
    case ThemeIconsEnum['text-align-left']:
      iconContent = theme.icons[ThemeIconsEnum['text-align-left']];
      break;
    case ThemeIconsEnum['text-align-center']:
      iconContent = theme.icons[ThemeIconsEnum['text-align-center']];
      break;
    case ThemeIconsEnum['text-align-right']:
      iconContent = theme.icons[ThemeIconsEnum['text-align-right']];
      break;
    case ThemeIconsEnum['text-align-justify']:
      iconContent = theme.icons[ThemeIconsEnum['text-align-justify']];
      break;
    case ThemeIconsEnum['line-spacing']:
      iconContent = theme.icons[ThemeIconsEnum['line-spacing']];
      break;
    case ThemeIconsEnum['indent-increase']:
      iconContent = theme.icons[ThemeIconsEnum['indent-increase']];
      break;
    case ThemeIconsEnum['indent-decrease']:
      iconContent = theme.icons[ThemeIconsEnum['indent-decrease']];
      break;
    case ThemeIconsEnum['text-wrap']:
      iconContent = theme.icons[ThemeIconsEnum['text-wrap']];
      break;
    case ThemeIconsEnum.pilcrow:
      iconContent = theme.icons[ThemeIconsEnum.pilcrow];
      break;
    case ThemeIconsEnum['direction-ltr']:
      iconContent = theme.icons[ThemeIconsEnum['direction-ltr']];
      break;
    case ThemeIconsEnum['direction-rtl']:
      iconContent = theme.icons[ThemeIconsEnum['direction-rtl']];
      break;
    case ThemeIconsEnum['page-break']:
      iconContent = theme.icons[ThemeIconsEnum['page-break']];
      break;
    case ThemeIconsEnum['page-break2']:
      iconContent = theme.icons[ThemeIconsEnum['page-break2']];
      break;
    case ThemeIconsEnum['sort-alpha-asc']:
      iconContent = theme.icons[ThemeIconsEnum['sort-alpha-asc']];
      break;
    case ThemeIconsEnum['sort-alpha-desc']:
      iconContent = theme.icons[ThemeIconsEnum['sort-alpha-desc']];
      break;
    case ThemeIconsEnum['sort-numeric-asc']:
      iconContent = theme.icons[ThemeIconsEnum['sort-numeric-asc']];
      break;
    case ThemeIconsEnum['sort-numeric-desc']:
      iconContent = theme.icons[ThemeIconsEnum['sort-numeric-desc']];
      break;
    case ThemeIconsEnum['sort-amount-asc']:
      iconContent = theme.icons[ThemeIconsEnum['sort-amount-asc']];
      break;
    case ThemeIconsEnum['sort-amount-desc']:
      iconContent = theme.icons[ThemeIconsEnum['sort-amount-desc']];
      break;
    case ThemeIconsEnum['sort-time-asc']:
      iconContent = theme.icons[ThemeIconsEnum['sort-time-asc']];
      break;
    case ThemeIconsEnum['sort-time-desc']:
      iconContent = theme.icons[ThemeIconsEnum['sort-time-desc']];
      break;
    case ThemeIconsEnum.sigma:
      iconContent = theme.icons[ThemeIconsEnum.sigma];
      break;
    case ThemeIconsEnum['pencil-line']:
      iconContent = theme.icons[ThemeIconsEnum['pencil-line']];
      break;
    case ThemeIconsEnum.hand:
      iconContent = theme.icons[ThemeIconsEnum.hand];
      break;
    case ThemeIconsEnum['pointer-up']:
      iconContent = theme.icons[ThemeIconsEnum['pointer-up']];
      break;
    case ThemeIconsEnum['pointer-right']:
      iconContent = theme.icons[ThemeIconsEnum['pointer-right']];
      break;
    case ThemeIconsEnum['pointer-down']:
      iconContent = theme.icons[ThemeIconsEnum['pointer-down']];
      break;
    case ThemeIconsEnum['pointer-left']:
      iconContent = theme.icons[ThemeIconsEnum['pointer-left']];
      break;
    case ThemeIconsEnum['finger-tap']:
      iconContent = theme.icons[ThemeIconsEnum['finger-tap']];
      break;
    case ThemeIconsEnum['fingers-tap']:
      iconContent = theme.icons[ThemeIconsEnum['fingers-tap']];
      break;
    case ThemeIconsEnum.reminder:
      iconContent = theme.icons[ThemeIconsEnum.reminder];
      break;
    case ThemeIconsEnum['fingers-crossed']:
      iconContent = theme.icons[ThemeIconsEnum['fingers-crossed']];
      break;
    case ThemeIconsEnum['fingers-victory']:
      iconContent = theme.icons[ThemeIconsEnum['fingers-victory']];
      break;
    case ThemeIconsEnum['gesture-zoom']:
      iconContent = theme.icons[ThemeIconsEnum['gesture-zoom']];
      break;
    case ThemeIconsEnum['gesture-pinch']:
      iconContent = theme.icons[ThemeIconsEnum['gesture-pinch']];
      break;
    case ThemeIconsEnum['fingers-scroll-horizontal']:
      iconContent = theme.icons[ThemeIconsEnum['fingers-scroll-horizontal']];
      break;
    case ThemeIconsEnum['fingers-scroll-vertical']:
      iconContent = theme.icons[ThemeIconsEnum['fingers-scroll-vertical']];
      break;
    case ThemeIconsEnum['fingers-scroll-left']:
      iconContent = theme.icons[ThemeIconsEnum['fingers-scroll-left']];
      break;
    case ThemeIconsEnum['fingers-scroll-right']:
      iconContent = theme.icons[ThemeIconsEnum['fingers-scroll-right']];
      break;
    case ThemeIconsEnum.hand2:
      iconContent = theme.icons[ThemeIconsEnum.hand2];
      break;
    case ThemeIconsEnum['pointer-up2']:
      iconContent = theme.icons[ThemeIconsEnum['pointer-up2']];
      break;
    case ThemeIconsEnum['pointer-right2']:
      iconContent = theme.icons[ThemeIconsEnum['pointer-right2']];
      break;
    case ThemeIconsEnum['pointer-down2']:
      iconContent = theme.icons[ThemeIconsEnum['pointer-down2']];
      break;
    case ThemeIconsEnum['pointer-left2']:
      iconContent = theme.icons[ThemeIconsEnum['pointer-left2']];
      break;
    case ThemeIconsEnum['finger-tap2']:
      iconContent = theme.icons[ThemeIconsEnum['finger-tap2']];
      break;
    case ThemeIconsEnum['fingers-tap2']:
      iconContent = theme.icons[ThemeIconsEnum['fingers-tap2']];
      break;
    case ThemeIconsEnum.reminder2:
      iconContent = theme.icons[ThemeIconsEnum.reminder2];
      break;
    case ThemeIconsEnum['gesture-zoom2']:
      iconContent = theme.icons[ThemeIconsEnum['gesture-zoom2']];
      break;
    case ThemeIconsEnum['gesture-pinch2']:
      iconContent = theme.icons[ThemeIconsEnum['gesture-pinch2']];
      break;
    case ThemeIconsEnum['fingers-scroll-horizontal2']:
      iconContent = theme.icons[ThemeIconsEnum['fingers-scroll-horizontal2']];
      break;
    case ThemeIconsEnum['fingers-scroll-vertical2']:
      iconContent = theme.icons[ThemeIconsEnum['fingers-scroll-vertical2']];
      break;
    case ThemeIconsEnum['fingers-scroll-left2']:
      iconContent = theme.icons[ThemeIconsEnum['fingers-scroll-left2']];
      break;
    case ThemeIconsEnum['fingers-scroll-right2']:
      iconContent = theme.icons[ThemeIconsEnum['fingers-scroll-right2']];
      break;
    case ThemeIconsEnum['fingers-scroll-vertical3']:
      iconContent = theme.icons[ThemeIconsEnum['fingers-scroll-vertical3']];
      break;
    case ThemeIconsEnum['border-style']:
      iconContent = theme.icons[ThemeIconsEnum['border-style']];
      break;
    case ThemeIconsEnum['border-all']:
      iconContent = theme.icons[ThemeIconsEnum['border-all']];
      break;
    case ThemeIconsEnum['border-outer']:
      iconContent = theme.icons[ThemeIconsEnum['border-outer']];
      break;
    case ThemeIconsEnum['border-inner']:
      iconContent = theme.icons[ThemeIconsEnum['border-inner']];
      break;
    case ThemeIconsEnum['border-top']:
      iconContent = theme.icons[ThemeIconsEnum['border-top']];
      break;
    case ThemeIconsEnum['border-horizontal']:
      iconContent = theme.icons[ThemeIconsEnum['border-horizontal']];
      break;
    case ThemeIconsEnum['border-bottom']:
      iconContent = theme.icons[ThemeIconsEnum['border-bottom']];
      break;
    case ThemeIconsEnum['border-left']:
      iconContent = theme.icons[ThemeIconsEnum['border-left']];
      break;
    case ThemeIconsEnum['border-vertical']:
      iconContent = theme.icons[ThemeIconsEnum['border-vertical']];
      break;
    case ThemeIconsEnum['border-right']:
      iconContent = theme.icons[ThemeIconsEnum['border-right']];
      break;
    case ThemeIconsEnum['border-none']:
      iconContent = theme.icons[ThemeIconsEnum['border-none']];
      break;
    case ThemeIconsEnum.ellipsis:
      iconContent = theme.icons[ThemeIconsEnum.ellipsis];
      break;

    default:
      iconContent = theme.icons.home;
  }

  return `\\${iconContent}`;
};

const IconStyled = styled.span<{ icon: string }>`
  /* use !important to prevent issues with browser extensions that change/fonts */
  font-family: 'RsIcons' !important;
  speak: none;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeight.black};
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &::before {
    content: ${({ icon, theme }) => `"${getIconContent(icon, theme).toString()}"`};
  }
`;

export default IconStyled;
