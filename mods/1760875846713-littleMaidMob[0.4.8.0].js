//0
ModPE.overrideTexture("images/mob/SackMaid.png", "http://i.imgur.com/HDMU4gp.png");
//1
ModPE.overrideTexture("images/mob/RedMaid.png", "http://i.imgur.com/MkEnefH.png");
//2
ModPE.overrideTexture("images/mob/GreenMaid.png", "http://i.imgur.com/PD6FzwY.png");
//3
ModPE.overrideTexture("images/mob/BeansMaid.png", "http://i.imgur.com/MbbwEe5.png");
//4
ModPE.overrideTexture("images/mob/LazuliMaid.png", "http://i.imgur.com/kUJ46TX.png");
//5
ModPE.overrideTexture("images/mob/PurpleMaid.png", "http://i.imgur.com/xcbII8o.png");
//6
ModPE.overrideTexture("images/mob/CyanMaid.png", "http://i.imgur.com/SWI21F7.png");
//7
ModPE.overrideTexture("images/mob/LightMaid.png", "http://i.imgur.com/o7UtWQK.png");
//8
ModPE.overrideTexture("images/mob/GrayMaid.png", "http://i.imgur.com/KVJAYJ7.png");
//9
ModPE.overrideTexture("images/mob/PinkMaid.png", "http://i.imgur.com/eBf5VYS.png");
//10
ModPE.overrideTexture("images/mob/LimeMaid.png", "http://i.imgur.com/OnvKGPD.png");
//11
ModPE.overrideTexture("images/mob/YellowMaid.png", "http://i.imgur.com/4w6kILO.png");
//12
ModPE.overrideTexture("images/mob/BlueMaid.png", "http://i.imgur.com/hHEXSZK.png");
//13
ModPE.overrideTexture("images/mob/MagentaMaid.png", "http://i.imgur.com/W4dHRVD.png");
//14
ModPE.overrideTexture("images/mob/OrangeMaid.png", "http://i.imgur.com/mB0Q4Bu.png");
//15
ModPE.overrideTexture("images/mob/MealMaid.png", "http://i.imgur.com/T5VoOrQ.png");
//16
ModPE.overrideTexture("images/mob/WildMaid.png", "http://i.imgur.com/S2tEQgV.png");
//17
ModPE.overrideTexture("images/mob/PokenaruMaid.png", "http://i.imgur.com/o1Du1k2.png");

var selectedEntity;
var entityIsSelected = false, teleported = false, deathAdd = false, displayID = true;
var countdown = 0, idMaid = -1, saveNumber = -1, attackedMaid = 0;
var wmaid;
var maidvi=0;
var startGame=0;
var satouReturned = Math.floor((Math.random() * 5) + 4);
var maid = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], 
                  [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], 
                  [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], 
                  [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], 
                  [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], 
                  [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], 
                  [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], 
                  [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], 
                  [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], 
                  [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], 
                  [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];

function entityAddedHook(entity){
maidsavebb=Entity.getEntityTypeId(entity);
if(maidsavebb==15){
if(maidvi==0){
Entity.setMobSkin(entity,"mob/WildMaid.png");
Entity.setRenderType(entity, maidRenderType.renderType);
        }
if(maidvi==1){
maidvi=0;
}
}
}

function useItem(x,y,z,itemId,blockId)
{
    if(itemId == 383){
if(Player.getCarriedItemData() == 15){
maidvi=1;
    }
}
}

function attackHook(attacker, victim)
{
var item = Player.getCarriedItem();
 if(attacker == Player.getEntity() && (item == 325 || item == 354 || item == 351))
    {
 if(getCarriedItem()==325&& Entity.getEntityTypeId(victim)==15 ){
if(Player.getCarriedItemData() == 0){
addItemInventory(325,1,1);
if (Level.getGameMode() == 1|| invContains(325, 1)) {
var maiddeduct = invDeduct(325,1,0);
}
preventDefault();
    }
if(Player.getCarriedItemData() == 8){
Entity.setRenderType(victim, maidRenderType.renderType);
Entity.setMobSkin(victim,"mob/PokenaruMaid.png");
Entity.setHealth(victim,10);
addItemInventory(325,1,0);
if (Level.getGameMode() == 1|| invContains(325, 1)) {
var maiddeduct = invDeduct(325,1,8);
}
preventDefault();
    }
}
 if(getCarriedItem()==354&& Entity.getEntityTypeId(victim)==15 ){
        var x = Entity.getX(victim);
        var y = Entity.getY(victim);
        var z = Entity.getZ(victim);
spawnmaid(x,y-1,z);
Level.addParticle(14, x+0.5, y+1.5, z+0.5, 0, 0, 0, 2);
Level.addParticle(14, x+1, y+1.5, z+0.5, 0, 0, 0, 1);
Level.addParticle(14, x-0.5, y+1.5, z-0.5, 0, 0, 0, 2);
Level.addParticle(14, x+0.5, y+1.5, z+1, 0, 0, 0, 1);
Level.addParticle(14, x-1, y+1.5, z-0.5, 0, 0, 0, 1);
Level.addParticle(14, x-0.5, y+1.5, z-1, 0, 0, 0, 1);
Entity.remove(victim);
if (Level.getGameMode() == 1|| invContains(354, 1)) {
var maiddeduct = invDeduct(354,1,0);
}

  }

 if(getCarriedItem()==351&& Entity.getEntityTypeId(victim)==15 ){

if(Player.getCarriedItemData() == 0){
Entity.setRenderType(victim, maidRenderType.renderType);
Entity.setMobSkin(victim,"mob/SackMaid.png");
Entity.setHealth(victim,10);
Player.addItemInventory(351,-1,0);
preventDefault();    }
if(Player.getCarriedItemData() == 1){
Entity.setRenderType(victim, maidRenderType.renderType);
Entity.setMobSkin(victim,"mob/RedMaid.png");
Entity.setHealth(victim,10);
Player.addItemInventory(351,-1,1);
preventDefault();    }
if(Player.getCarriedItemData() == 2){
Entity.setRenderType(victim, maidRenderType.renderType);
Entity.setMobSkin(victim,"mob/GreenMaid.png");
Entity.setHealth(victim,10);
Player.addItemInventory(351,-1,2);
preventDefault();    }
if(Player.getCarriedItemData() == 3){
Entity.setRenderType(victim, maidRenderType.renderType);
Entity.setMobSkin(victim,"mob/BeansMaid.png");
Entity.setHealth(victim,10);
Player.addItemInventory(351,-1,3);
preventDefault();    }
if(Player.getCarriedItemData() == 4){
Entity.setRenderType(victim, maidRenderType.renderType);
Entity.setMobSkin(victim,"mob/LazuliMaid.png");
Entity.setHealth(victim,10);
Player.addItemInventory(351,-1,4);
preventDefault();    }
if(Player.getCarriedItemData() == 5){
Entity.setRenderType(victim, maidRenderType.renderType);
Entity.setMobSkin(victim,"mob/PurpleMaid.png");
Entity.setHealth(victim,10);
Player.addItemInventory(351,-1,5);
preventDefault();    }
if(Player.getCarriedItemData() == 6){
Entity.setRenderType(victim, maidRenderType.renderType);
Entity.setMobSkin(victim,"mob/CyanMaid.png");
Entity.setHealth(victim,10);
Player.addItemInventory(351,-1,6);
preventDefault();    }
if(Player.getCarriedItemData() == 7){
Entity.setRenderType(victim, maidRenderType.renderType);
Entity.setMobSkin(victim,"mob/LightMaid.png");
Entity.setHealth(victim,10);
Player.addItemInventory(351,-1,7);
preventDefault();    }
if(Player.getCarriedItemData() == 8){
Entity.setRenderType(victim, maidRenderType.renderType);
Entity.setMobSkin(victim,"mob/GrayMaid.png");
Entity.setHealth(victim,10);
Player.addItemInventory(351,-1,8);
preventDefault();    }
if(Player.getCarriedItemData() == 9){
Entity.setRenderType(victim, maidRenderType.renderType);
Entity.setMobSkin(victim,"mob/PinkMaid.png");
Entity.setHealth(victim,10);
Player.addItemInventory(351,-1,9);
preventDefault();    }
if(Player.getCarriedItemData() == 10){
Entity.setRenderType(victim, maidRenderType.renderType);
Entity.setMobSkin(victim,"mob/LimeMaid.png");
Entity.setHealth(victim,10);
Player.addItemInventory(351,-1,10);
preventDefault();    }
if(Player.getCarriedItemData() == 11){
Entity.setRenderType(victim, maidRenderType.renderType);
Entity.setMobSkin(victim,"mob/YellowMaid.png");
Entity.setHealth(victim,10);
Player.addItemInventory(351,-1,11);
preventDefault();    }
if(Player.getCarriedItemData() == 12){
Entity.setRenderType(victim, maidRenderType.renderType);
Entity.setMobSkin(victim,"mob/BlueMaid.png");
Entity.setHealth(victim,10);
Player.addItemInventory(351,-1,12);
preventDefault();    }
if(Player.getCarriedItemData() == 13){
Entity.setRenderType(victim, maidRenderType.renderType);
Entity.setMobSkin(victim,"mob/MagentaMaid.png");
Entity.setHealth(victim,10);
Player.addItemInventory(351,-1,13);
preventDefault();    }
if(Player.getCarriedItemData() == 14){
Entity.setRenderType(victim, maidRenderType.renderType);
Entity.setMobSkin(victim,"mob/OrangeMaid.png");
Entity.setHealth(victim,10);
Player.addItemInventory(351,-1,14);
preventDefault();    }
if(Player.getCarriedItemData() == 15){
Entity.setRenderType(victim, maidRenderType.renderType);
Entity.setMobSkin(victim,"mob/MealMaid.png");
Entity.setHealth(victim,10);
Player.addItemInventory(351,-1,15);
preventDefault();    }
}

}else{
        selectedEntity = victim;
        entityIsSelected = true;
        teleported = false;
 
    if(victim == Player.getEntity() && idMaid != -1)
    {
        entityIsSelected = true;
        teleported = false;
    }


    {
        loop5:
        for(var i5 = 0; i5 <= idMaid; i5++)
        {
            if(victim == maid[i5][0])
            {
                Level.playSoundEnt(maid[i5][0], "random.hurt", 100, 30);
                ModPE.showTipMessage("Maid health: " + (Entity.getHealth(maid[i5][0]) / 2));
                break loop5;
            }
        }
    }
}
}
 
function deathHook(murderer, victim)
{
    if(victim == selectedEntity)
    {
        entityIsSelected = false;
        teleported = false;
    }
    for (var i = 0; i <= idMaid; i++)
    {
        if(victim == maid[i][0])
        {
            preventDefault();
            Level.playSoundEnt(maid[i][0], "random.hurt", 1000, 15);
	    Level.dropItem(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 0, 353, satouReturned, 0);
	    satouReturned = Math.floor((Math.random() * 5) + 4);
            maid.splice(i, 1);
            attackedMaid--;
            idMaid--;
            if(idMaid == -1)
            {
                entityIsSelected = false;
                teleported = false;
            }
        }
	if(victim == wmaid)
	{
		preventDefault();
		Level.dropItem(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 0, 353, satouReturned, 0);
		satouReturned = Math.floor((Math.random() * 5) + 4);
		entityIsSelected = false;
		teleported = false;
	}
    }
}
 
function leaveGame()
{
    saveNumber = idMaid;
    ModPE.saveData("saveNumber", saveNumber);
    for(var i = 0; i <= saveNumber; i++)
    {
        ModPE.saveData("savedDamage" + i, maid[i][1]);
        ModPE.saveData("savedDeathCount" + i, maid[i][3]);
        ModPE.saveData("savedIdInTheName" + i, maid[i][4]);
        ModPE.saveData("savedName" + i, maid[i][5]);
    }
    attackedMaid = 0;
    entityIsSelected = false;
    teleported = false;
    idMaid = -1;
}
 
function newLevel()
{
    saveNumber = ModPE.readData("saveNumber");
    if(saveNumber != -1) 
    {
        for(var i = 0; i <= saveNumber; i++)
        {
            maid[i][1] = ModPE.readData("savedDamage" + i);
            maid[i][3] = ModPE.readData("savedDeathCount" + i);
            maid[i][4] = ModPE.readData("savedIdInTheName" + i);
            maid[i][5] = ModPE.readData("savedName" + i);
        }
    }
}
 
function modTick()
{
if(startGame==0){ 
        startGame = 1; 
} 
   
if(startGame==1){ 
   var SpawnMob = Math.floor((Math.random()*2400)+1); 
    
switch(SpawnMob){
        case 1:
   wmaid=Level.spawnMob(getPlayerX()+32,getPlayerY()+1,getPlayerZ()+32,15,"mob/WildMaid.png" );
Entity.setHealth(wmaid ,5);
Entity.setRenderType(wmaid,wmaidRenderType.renderType);
   break;}
   }
    if(idMaid != -1)
    {
        for(var i = 0; i <= idMaid; i++)
        {
            var coX = Math.round(Entity.getX(maid[i][0]));
         
            var coZ = Math.round(Entity.getZ(maid[i][0]));
            var vX = 0, vZ = 0;
            if(entityIsSelected)
            {
                countdown++;
                var sEX = Math.round(Entity.getX(selectedEntity));
                var sEY = Math.round(Entity.getY(selectedEntity));
                var sEZ = Math.round(Entity.getZ(selectedEntity));
                var yaw = Math.atan2((sEZ - coZ), (sEX - coX));
                if(teleported == false)
                {
                    for(var t = 0; t <= idMaid; t++)
                    {
                        Entity.setPosition(maid[t][0], (sEX + 1), sEY, sEZ);
                    }
                    teleported = true;
                }
                if((sEX - 1) > coX)
                {
                    vX = 0.2;
                }
                if((sEZ - 1) > coZ)
                {
                    vZ = 0.2;
                }
                if(coX > (sEX + 1))
                {
                    vX = -0.2;
                }
                if(coZ > (sEZ + 1))
                {
                    vZ = -0.2;
                }
                if(vX != 0)
                {
                    Entity.setVelX(maid[i][0], vX);
                }
                if(vZ != 0)
                {
                    Entity.setVelZ(maid[i][0], vZ);
                }
                Entity.setRot(maid[i][0], (((yaw * 180) / 3.14) + 270), Entity.getPitch(maid[i][0])); 
                if(countdown == 20)
                {
                    var dXZ = Math.pow((sEX - coX), 2) + Math.pow((sEZ - coZ), 2);
                    if(dXZ <= 3.5)
                    {
                        simulateAttackHook(i);
                    }
                    if(dXZ >= 20)
                    {
                        Entity.setVelY(maid[i][0], 0.4);
                    }
                    countdown = 0;
                }
            }else
            {
                var sEX = Math.round(Player.getX());
                var sEY = Math.round(Player.getY());
                var sEZ = Math.round(Player.getZ());
                var yaw = Math.atan2((sEZ - coZ), (sEX - coX));
                if((sEX - 3) > coX)
                {
                    vX = 0.2;
                }
                if((sEZ - 3) > coZ)
                {
                    vZ = 0.2;
                }
                if(coX > (sEX + 3))
                {
                    vX = -0.2;
                }
                if(coZ > (sEZ + 3))
                {
                    vZ = -0.2;
                }
                Entity.setVelX(maid[i][0], vX);
                Entity.setVelZ(maid[i][0], vZ);
                Entity.setRot(maid[i][0], (((yaw * 180) / 3.14) + 270), Entity.getPitch(maid[i][0]));
                if(Math.pow((sEX - coX), 2) + Math.pow((sEZ - coZ), 2) >= 30)
                {
                    if(maid[i][2] >= 40)
                    {
                        maid[i][2] = 0;
                        Entity.setVelY(maid[i][0], 0.4);
                    }
                    maid[i][2]++;
                }
            }
        }
    }
}

//0
function spawnmaid(x, y, z)
{
    idMaid++;
    Entity.remove(maid);
    maid[idMaid][0] = Level.spawnMob(x, y+1, z, 15, "mob/SackMaid.png");
    if(!(maid[idMaid][1] >= 1))
    {
        maid[idMaid][1] = 1;
    }
    maid[idMaid][2] = 0;
    if(!(maid[idMaid][3] >= 0))
    {
        maid[idMaid][3] = 0;
    }
    Entity.setRenderType(maid[idMaid][0],maidRenderType.renderType, 3);
    Entity.setHealth(maid[idMaid][0], 10);
}
//16
function spawnwmaid(x, y, z)
{
	Entity.remove(wmaid);
	wmaid = Level.spawnMob(x, y, z, 15, "mob/WildMaid.png");
	Entity.setRenderType(wmaid,wmaidRenderType.renderType);
	Entity.setHealth(wmaid, 5);
	wmaidSpawned = true;
}

function simulateAttackHook(ID)
{
    var mobHealth = Entity.getHealth(selectedEntity);
    if(mobHealth <= (maid[ID][1] * 2))
    {
        attackedMaid = 0;
        entityIsSelected = false;
        teleported = false;
        deathAdd = true;
    }
    Entity.setHealth(selectedEntity, (mobHealth - ((maid[ID][1] * 2) - 1)));
    Entity.setFireTicks(selectedEntity, 1);
    ModPE.showTipMessage("Mob HP: " + ((mobHealth / 2) - 1));
    if(deathAdd)
    {
        deathAdd = false;
        maid[ID][3]++;
        if((maid[ID][3] % (5 * maid[ID][1])) == 0)
        {
            maid[ID][1]++;
            maid[ID][3] = 0;
        }
    }
}
 
 function invContains(itemId, count) {
    var maidhasItem = false; 
     
    for (var i = 0; i < 36; i++) {
        if (Player.getInventorySlot(i) == itemId && Player.getInventorySlotCount(i) >= count) {
            maidhasItem = true;
            break; 
        }
    }
     
    return maidhasItem;
}
 
function invDeduct(itemId, count) {
    var maiddidDeduct = false; 
     
    for (var i = 0; i < 36; i++) {
        if (Player.getInventorySlot(i) == itemId && Player.getInventorySlotCount(i) >= count) {
            var remainder = Player.getInventorySlotCount(i) - count;
            Player.clearInventorySlot(i);
            Player.addItemInventory(itemId, remainder, 0);
            maiddidDeduct = true;
            break; 
        }
    }
     
    return maiddidDeduct;
}





function addMaidRenderType(renderer) 
{

var model = renderer.getModel();
var var2 = 0;

var head = model.getPart("head").clear();
var body = model.getPart("body").clear();
var rArm = model.getPart("rightArm").clear();
var lArm = model.getPart("leftArm").clear();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();

head.clear();
head.setTextureOffset(0, 0, true);
head.addBox(-4, -1, -4, 8, 8, 8);

body.clear();


body.setTextureOffset(32, 8, true);
body.addBox(-3, 7, -2, 6, 7, 4);

body.setTextureOffset(0, 16, true);
body.addBox(-4, 12, -4, 8, 8, 8);
rArm.clear();

rArm.setTextureOffset(48, 0, true);
rArm.addBox(0, 5, -2, 2, 8, 2);

lArm.clear();
lArm.setTextureOffset(56, 0, true);
lArm.addBox(-2, 5, -2, 2, 8, 2);

rLeg.clear();
rLeg.setTextureOffset(32, 19, true);
rLeg.addBox(-1, 3, -2, 3, 9, 4);




lLeg.clear();
lLeg.setTextureOffset(32, 19, true);
lLeg.addBox(-2, 3, -2, 3, 9, 4);

} 
 
function addWmaidRenderType(renderer) 
{

var model = renderer.getModel();
var var2 = 0;

var head = model.getPart("head").clear();
var body = model.getPart("body").clear();
var rArm = model.getPart("rightArm").clear();
var lArm = model.getPart("leftArm").clear();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();


head.clear();
head.setTextureOffset(0, 0, true);
head.addBox(-4, -1, -4, 8, 8, 8);

body.clear();


body.setTextureOffset(32, 8, true);
body.addBox(-3, 7, -2, 6, 7, 4);

body.setTextureOffset(0, 16, true);
body.addBox(-4, 12, -4, 8, 8, 8);
rArm.clear();

rArm.setTextureOffset(48, 0, true);
rArm.addBox(0, 5, -2, 2, 8, 2);

lArm.clear();
lArm.setTextureOffset(56, 0, true);
lArm.addBox(-2, 5, -2, 2, 8, 2);

rLeg.clear();
rLeg.setTextureOffset(32, 19, true);
rLeg.addBox(-1, 3, -2, 3, 9, 4);




lLeg.clear();
lLeg.setTextureOffset(32, 19, true);
lLeg.addBox(-2, 3, -2, 3, 9, 4);


} 

var maidRenderType = Renderer.createHumanoidRenderer();
addMaidRenderType(maidRenderType);

var wmaidRenderType = Renderer.createHumanoidRenderer();
addWmaidRenderType(wmaidRenderType);
