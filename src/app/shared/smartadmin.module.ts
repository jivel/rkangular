import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {
    ModalModule,
    ButtonsModule,
    TooltipModule,
    BsDropdownModule,
    ProgressbarModule,
    AlertModule,
    TabsModule
} from "ng2-bootstrap";
import {PopoverModule} from "ng2-popover";
import {SmartadminLayoutModule} from "./layout";
import {I18nModule} from "./i18n/i18n.module";
import {VoiceControlModule} from "./voice-control/voice-control.module";
import {SmartadminWidgetsModule} from "./widgets/smartadmin-widgets.module";
import {UtilsModule} from "./utils/utils.module";
import {ChatModule} from "./chat/chat.module";
import {StatsModule} from "./stats/stats.module";
import {InlineGraphsModule} from "./graphs/inline/inline-graphs.module";
import {SmartadminFormsLiteModule} from "./forms/smartadmin-forms-lite.module";
import {SmartProgressbarModule} from "./ui/smart-progressbar/smart-progressbar.module";
import {ConfirmModule} from "./confirm/confirm.module";


@NgModule({
    imports: [
        CommonModule, FormsModule, HttpModule, RouterModule,
    ],
    declarations: [],
    exports: [
        CommonModule, FormsModule, HttpModule, RouterModule,
        ModalModule,
        ButtonsModule,
        AlertModule,
        TabsModule,
        TooltipModule,
        BsDropdownModule,
        ProgressbarModule,
        PopoverModule,
        SmartadminLayoutModule,
        I18nModule,
        UtilsModule,
        SmartadminFormsLiteModule,
        SmartProgressbarModule,
        InlineGraphsModule,
        SmartadminWidgetsModule,
        ChatModule,
        StatsModule,
        VoiceControlModule,
        ConfirmModule
    ]
})
export class SmartadminModule {
}
