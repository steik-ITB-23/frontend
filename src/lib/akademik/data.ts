export interface AkademikDataType {
  title: string;
  type: "materi" | "soal" | "tutorial";
  linkDrive: string;
}

export const AkademikData: { [key: string]: AkademikDataType[] } = {
  "matematika-2a": [
    {
      title: "Solusi Mockup Matematika UTS 1 2024 (Pak Barra)",
      type: "materi",
      linkDrive: "https://drive.google.com/file/d/1kC-vdojqbSN1m-9Y7d9HOlVEyoWRayfd/view?usp=drive_link",
    },
  ],
};
