import { Component, h, Prop } from "@stencil/core";
import { MessageType } from "./message-options";

@Component({
    tag: 'harmonized-message',
    styleUrl: 'message-component.scss'
})
export class MessageComponent {

    @Prop() text: string
    @Prop() type: MessageType

    className(type: MessageType) {

        let className = 'message'

        switch (type) {
            case 'success':
                className += ' is-success'
                break
            case 'error':
                className += ' is-danger'
                break
            default:
                className += ' is-dark'
                break
        }

        return className
    }

    render() {

        return <article class={this.className(this.type)}>
            {
                this.text &&
                <div class="message-header">
                    <p>{this.text}</p>
                </div>
            }
            <div class="message-body">
                <slot />
            </div>
        </article>
    }
}