export function calculateCameraPosition(progress: number) {
  const angle = Math.PI * 0.6 * progress; // 최대 90도 회전 제한
  const radius = 5 + progress * 3; // 거리: 5에서 8로 증가
  const x = radius * Math.cos(angle);
  const z = 3 + progress * 3; // z의 초기값을 3으로 설정하고 증가
  const y = 2 + progress * 5; // y의 초기값을 2로 설정하고 증가

  return { x, y, z };
}
