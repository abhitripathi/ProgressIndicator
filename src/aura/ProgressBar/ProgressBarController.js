({
    doInit : function(component, event, helper) {
        var prog = component.find('progress');
        $A.util.addClass(prog, 'default');
        
        var toggleTooltip = component.find("tooltip");
        $A.util.addClass(toggleTooltip, "tooltip");

    },
    
    step1Check: function(component, event, helper) {
        component.set("v.iconForStep1",
                      component.get("v.iconForStep1")=="utility:progress"?"utility:success":"utility:progress");
        
        var cmpTarget = component.find('step1');
        $A.util.addClass(cmpTarget, 'slds-is-completed');
        
        var prog = component.find('progress');
        $A.util.removeClass(prog, 'default');
        $A.util.toggleClass(prog, 'step1');
        
    },
    
    step2Check : function(component, event, helper) {
        component.set("v.iconForStep2",
                      component.get("v.iconForStep2")=="utility:progress"?"utility:success":"utility:progress");
        
        var cmpTarget = component.find('step2');
        $A.util.addClass(cmpTarget, 'slds-has-error');
        
        var prog = component.find('progress');
        $A.util.toggleClass(prog, 'step2');
        
    },

    step3Check : function(component, event, helper) {
        component.set("v.iconForStep3",
                      component.get("v.iconForStep3")=="utility:progress"?"utility:success":"utility:progress");
        
        var cmpTarget = component.find('step3');
        $A.util.addClass(cmpTarget, 'slds-has-error');
        
        var prog = component.find('progress');
        $A.util.toggleClass(prog, 'step3');
        
    },
    
    step4Check : function(component, event, helper) {
        component.set("v.iconForStep4",
                      component.get("v.iconForStep4")=="utility:progress"?"utility:success":"utility:progress");
        
        var cmpTarget = component.find('step4');
        $A.util.addClass(cmpTarget, 'slds-has-error');
        
        var prog = component.find('progress');
        $A.util.toggleClass(prog, 'step4');
        
    },
    
    step5Check : function(component, event, helper) {
        component.set("v.iconForStep5",
                      component.get("v.iconForStep5")=="utility:progress"?"utility:success":"utility:progress");
        
        var cmpTarget = component.find('step5');
        $A.util.addClass(cmpTarget, 'slds-has-error');
        
        var toggleTooltip = component.find("tooltip");
        $A.util.removeClass(toggleTooltip, "tooltip");

    }

})