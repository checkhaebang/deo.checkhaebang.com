/**
 * Expansion 기능을 제공해야 한다
 * Header: Title, TriangleIcon
 * Contents:
 *   SingleChoice: title, status, checks
 *   MultipleChoice: title, status, checks
 * 함수를 작성할 때는 공용 이름보다는 사용하는 의도가 적힌 것이 좋다
 */
import React, { ReactElement } from "react";

import { CheckQuestion } from "../models";

type Props = {
  questions: Array<CheckQuestion>;
};
export default function ChecklistView({ questions }: Props): ReactElement {
  return <div>체크리스트</div>;
}

export function ChecktlistItemView(): ReactElement {
  return <></>;
}
