/**
 * 자리수만큼 0을 채워주는 함수
 *
 * example)
 * - zeroPad(1, 10):  01
 * - zeroPad(1, 100): 001
 */
export default function zeroPad(n: number, base: number): string {
  const len: number = String(base).length - String(n).length + 1;
  return len > 0 ? new Array(len).join("0") + n : String(n);
}
