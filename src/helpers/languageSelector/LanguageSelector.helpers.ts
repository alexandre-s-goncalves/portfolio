export const getMenuItems = (container: HTMLDivElement | null) =>
  Array.from(
    container?.querySelectorAll<HTMLButtonElement>('button[role="menuitem"]') ??
      [],
  );
