function ЧерныйБелый () {
    ЧёрныйЧерный()
}
function БелыйЧёрный () {
	
}
function БелыйБелый () {
    maqueen.motorStop(maqueen.Motors.M2)
    счётчик = 0
    правый_датчик_ББ = правый_датчик
    левый_датчик_ББ = левый_датчик
    while (левый_датчик_ББ == белый && правый_датчик_ББ == белый) {
        счётчик += 1
        левый_датчик_ББ = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
        правый_датчик_ББ = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    }
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    while (счётчик > 0) {
        счётчик += -1
        левый_датчик_ББ = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
        правый_датчик_ББ = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    }
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
}
function ЧёрныйЧерный () {
    maqueen.motorStop(maqueen.Motors.M1)
    basic.pause(время_после_поворота)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
}
let левый_датчик_ББ = 0
let правый_датчик_ББ = 0
let счётчик = 0
let правый_датчик = 0
let левый_датчик = 0
let время_после_поворота = 0
let белый = 0
белый = 1
let чёрный = 0
let код_завершения = 0
время_после_поворота = 200
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
while (код_завершения == 0) {
    левый_датчик = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    правый_датчик = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    if (левый_датчик == белый && правый_датчик == белый) {
        БелыйБелый()
    }
    if (левый_датчик == чёрный && правый_датчик == чёрный) {
        ЧёрныйЧерный()
    }
    if (левый_датчик == чёрный && правый_датчик == белый) {
        ЧерныйБелый()
    }
    if (левый_датчик == белый && правый_датчик == чёрный) {
        БелыйЧёрный()
    }
}
maqueen.motorStop(maqueen.Motors.All)
basic.showNumber(код_завершения)
