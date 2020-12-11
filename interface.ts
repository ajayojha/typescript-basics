
<div class="chosen-container {{openDrop}} {{activeTag}} "[class.rxMessage - control - element] = "!isInValid" title = "" >
    <ul class="chosen-choices" >
        <li class="search-field" >
            <span class="input-group" >
                <input[class]="mainClass"[tabindex] = "controlTabIndex" type = "text"[placeholder] = "selectPlaceholder"[disabled] = "selectDisabled" #selectSearch(click) = "onFocus($event)"(blur) = "onBlur($event,$event.target.value)"(keydown) = "onKeydown($event,scroller)"(keydown.enter) = "enter($event.target)"(keyup) = "onKeyup($event,scroller)" class="form-control" autocomplete = "off" >
                    <span class="input-group-append" >
                        <span class="input-group-text" >
                            <i class="fa fa-spinner fa-pulse"[class.d - none] = "!isSpinner" > </i>
                                < i class="fa fa-caret-down"(click) = "caretClick($event)"[class.d - none] = "!(!isSpinner && !autoComplete)" > </i>
                                    < /span>
                                    < /span>
                                    < /span>
                                    < /li>
                                    < /ul>
                                    < div class="chosen-drop"  #scroller >
                                        <ul class="chosen-results"[id] = "selectId" >
                                            <li class="active-result" * ngIf="isIncludePlaceholder"(mouseover) = "onMouseover()"(click) = "clear($event)"[class.highlighted] = "selectActive" > {{ selectPlaceholder }}</li>
                                                < li class="active-result" * ngFor="let tag of dropSource;let i = index"(click) = "onClick(tag,selectSearch)"(mouseover) = "onMouseover(tag,i)"[class.highlighted] = "tag.active"[class.activeTag] = "tag.active" > {{ tag.value }}</li>
                                                    < /ul>
                                                    < /div>
                                                    < /div>
