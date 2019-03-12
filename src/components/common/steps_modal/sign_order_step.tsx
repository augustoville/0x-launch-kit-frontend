import { BigNumber } from '0x.js';
import { SignedOrder } from '@0x/connect';
import React from 'react';
import { connect } from 'react-redux';

import { createSignedOrder, submitLimitOrder } from '../../../store/actions';
import { getStepsModalCurrentStep } from '../../../store/selectors';
import { OrderSide, StepBuySellLimitOrder, StoreState } from '../../../util/types';
import { StepItem } from '../steps_modal/steps_progress';

import {
    ModalContent,
    ModalStatusText,
    ModalText,
    StepStatus,
    StepStatusConfirmOnMetamask,
    StepStatusDone,
    StepStatusError,
    StepStatusLoading,
    StepsTimeline,
    Title,
} from './steps_common';

interface StateProps {
    step: StepBuySellLimitOrder;
}

interface DispatchProps {
    createSignedOrder: (amount: BigNumber, price: BigNumber, side: OrderSide) => Promise<SignedOrder>;
    submitLimitOrder: (singedOrder: SignedOrder) => Promise<any>;
}

type Props = StateProps & DispatchProps;

interface State {
    status: StepStatus;
}

class SignOrderStep extends React.Component<Props, State> {
    public state = {
        status: StepStatus.ConfirmOnMetamask,
    };

    public componentDidMount = async () => {
        // await this._getSignedOrder();
    };

    public render = () => {
        const { status } = this.state;
        const retry = () => this._retry();
        let content;

        const steps: StepItem[] = [
            {
                active: true,
                progress: '100',
                title: 'Unlock',
            },
            {
                active: true,
                progress: '30',
                title: 'Name',
            },
            {
                active: false,
                progress: '0',
                title: 'Another Name',
            },
        ];

        switch (status) {
            case StepStatus.Loading:
                content = <StepStatusLoading>Submitting order.</StepStatusLoading>;
                break;
            case StepStatus.Done:
                content = <StepStatusDone>Order successfully placed! (may not be filled immediately)</StepStatusDone>;
                break;
            case StepStatus.Error:
                content = (
                    <StepStatusError>
                        Error signing/submitting order. <em onClick={retry}>Click here to try again</em>
                    </StepStatusError>
                );
                break;
            default:
                content = (
                    <StepStatusConfirmOnMetamask>
                        <ModalText>Confirm signature on Metamask to submit order.</ModalText>
                    </StepStatusConfirmOnMetamask>
                );
                break;
        }
        return (
            <>
                <ModalContent>
                    <Title>Order Setup</Title>
                    {content}
                    <StepsTimeline steps={steps} />
                    <ModalStatusText>Current status, waiting, time...</ModalStatusText>
                </ModalContent>
            </>
        );
    };

    private readonly _getSignedOrder = async () => {
        const { amount, price, side } = this.props.step;
        const signedOrder = await this.props.createSignedOrder(amount, price, side);
        this.setState({ status: StepStatus.Loading });
        await this.props.submitLimitOrder(signedOrder);
        this.setState({ status: StepStatus.Done });
    };

    private readonly _retry = async () => {
        this.setState({ status: StepStatus.Error });
        await this._getSignedOrder();
    };
}

const mapStateToProps = (state: StoreState): StateProps => {
    return {
        step: getStepsModalCurrentStep(state) as StepBuySellLimitOrder,
    };
};

const SignOrderStepContainer = connect(
    mapStateToProps,
    (dispatch: any) => {
        return {
            submitLimitOrder: (signedOrder: SignedOrder) => dispatch(submitLimitOrder(signedOrder)),
            createSignedOrder: (amount: BigNumber, price: BigNumber, side: OrderSide) =>
                dispatch(createSignedOrder(amount, price, side)),
        };
    },
)(SignOrderStep);

export { SignOrderStep, SignOrderStepContainer };
