import * as React from "react";
import { DirectLine } from "botframework-directlinejs";
import ReactWebChat from "botframework-webchat";

export interface IReactFooterProps {
    directLineToken: string;
    upn: string;
 }

export default class ReactFooter extends React.Component<IReactFooterProps> {
    private directLine: DirectLine;
    constructor(props: IReactFooterProps) {
        super(props);
        this.directLine = new DirectLine({ token: props.directLineToken });
    }

    public render() : JSX.Element{
        return (
            <ReactWebChat directLine={this.directLine} userID={this.props.upn} />
        );
    }
}
