import { app, Menu, Tray, nativeImage } from "electron";
import path from "node:path";

app.whenReady().then(() => {

  const iconPath = path.join(__dirname, '../../resources/rotionTemplate.png');

  const icon = nativeImage.createFromPath(iconPath);

  if (icon.isEmpty()) {
    console.error("Erro: Não foi possível encontrar o ícone em:", iconPath);
  }

  const tray = new Tray(icon);

  const menu = Menu.buildFromTemplate([
    {
      label: 'Rotion', enabled: false
    },
    { type: 'separator' },
    { label: 'Rotion'},
    {
      label: 'Quit', click: () => { app.quit(); }
    }
  ]);

  tray.setContextMenu(menu);
})
