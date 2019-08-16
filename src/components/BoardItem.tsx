import * as React from 'react';

interface IProps{
    row: any
    onBoardDataSelect(e: number): void
    onBoardRemove(e: number): void
}

export class BoardItem extends React.Component<IProps> {

    handleUpdateForm = (i) => {
        this.props.onBoardDataSelect(i);
    };

    handleBoardDataRemove = (i) => {
        this.props.onBoardRemove(i)
    };

    render(){
        const { row } = this.props;
        return(
            <tr>
                <td>{ row.boardNumber }</td>
                <td><a onClick={ () => this.handleUpdateForm(row.boardNumber) }>{ row.boardTitle }</a></td>
                <td>{ row.boardWriter }</td>
                <td>{ row.boardMakeDate.toLocaleDateString('ko-KR') }</td>
                <td><a onClick={ () => this.handleBoardDataRemove(row.boardNumber) }>삭제</a></td>
            </tr>
        )
    }
};