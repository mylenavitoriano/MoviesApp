import { Screen } from "../../components/common/Screen";
import { ScrollView, StyleSheet, View } from "react-native";
import { colors } from "../../theme/colors";
import { ProfileAvatar } from "../../components/profile/ProfileAvatar";
import { ProfileStatCard } from "../../components/profile/ProfileStatCard";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { profileMock, profileStatsMock } from "../../mocks/profile";
import { Text } from "react-native-paper";
import { ProfileMenuRow } from "../../components/profile/ProfileMenuRow";
import { Bell, Globe, LogOut, Moon, Pencil, Shield } from "lucide-react-native";
import { spacing } from "../../theme/spacing";
import { radius } from "../../theme/radius";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "../../routes/types";

export function ProfileScreen() {
    const navigation = useNavigation<RootStackNavigationProp>();

    const tabBarHeight = useBottomTabBarHeight();

    return (
        <Screen style={styles.screen}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: tabBarHeight + 24 }}
            >
                <ProfileAvatar 
                    name={profileMock.name}
                    email={profileMock.email}
                    memberSince={profileMock.memberSince}
                />

                {/* Stats */}
                <View style={styles.statsRow}>
                    {profileStatsMock.map(stat => (
                        <ProfileStatCard 
                            key={stat.id}
                            value={stat.value}
                            label={stat.label}
                        />
                    ))}
                </View>

                {/* Preferences */}
                <Text variant="titleSmall" style={styles.sectionTitle}>
                    Preferences
                </Text>
                <View style={styles.menuCard}>
                    <ProfileMenuRow 
                        icon={Globe}
                        label="Language"
                        value="English"
                        onPress={() => console.log("Language")}
                    />
                    <ProfileMenuRow 
                        icon={Moon}
                        label="Theme"
                        value="Dark"
                        onPress={() => console.log("Theme")}
                    />
                    <ProfileMenuRow 
                        icon={Bell}
                        label="Notifications"
                        value="On"
                        onPress={() => console.log("Notifications")}
                    />
                </View>

                {/* Account  */}
                <Text variant="titleSmall" style={styles.sectionTitle}>
                    Account 
                </Text>
                <View style={styles.menuCard}>
                    <ProfileMenuRow 
                        icon={Pencil}
                        label="Edit profile"
                        onPress={() => navigation.navigate('EditProfile')}
                    />
                    <ProfileMenuRow 
                        icon={Shield}
                        label="Privacy"
                        onPress={() => console.log("Privacy")}
                    />
                    <ProfileMenuRow 
                        icon={LogOut}
                        label="Log out"
                        onPress={() => console.log("Log out")}
                    />
                </View>
            </ScrollView>
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.background
    },
    statsRow: {
        flexDirection: 'row',
        gap: spacing.md,
        marginBottom: spacing.xl,
    },
    sectionTitle: {
        color: colors.textSecondary,
        marginBottom: spacing.sm,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    menuCard: {
        backgroundColor: colors.surface,
        borderRadius: radius['2xl'],
        borderWidth: 1,
        borderColor: colors.border,
        marginBottom: spacing.xl,
        overflow: 'hidden'
    },
})