import { Screen } from "../../components/common/Screen";
import { ScrollView, StyleSheet, View } from "react-native";
import { colors } from "../../theme/colors";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "../../routes/types";
import { Controller, useForm } from "react-hook-form";
import { AppIconButton } from "../../components/common/AppIconButton";
import { ArrowLeft } from "lucide-react-native";
import { Button, HelperText, Text, TextInput } from "react-native-paper";
import { spacing } from "../../theme/spacing";
import { radius } from "../../theme/radius";
import { profileMock } from "../../mocks/profile";

type EditProfileFormData = {
    name: string;
    email: string;
};

export function EditProfileScreen() {
    const navigation = useNavigation<RootStackNavigationProp>();

    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<EditProfileFormData>({
        defaultValues: {
            name: profileMock.name,
            email: profileMock.email,
        },
    });

    function onSubmit(data: EditProfileFormData) {
        console.log("Profile updated: ", data);
        navigation.goBack();
    }

    return (
        <Screen style={styles.screen}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
                keyboardShouldPersistTaps="handled"
            >
                {/* Header */}
                <View style={styles.header}>
                    <AppIconButton icon={ArrowLeft} onPress={navigation.goBack} />
                    <Text variant="titleLarge" style={styles.title}>
                        Edit profile
                    </Text>
                    <View style={styles.headerSpacer} />
                </View>

                {/* Campos */}
                <View style={styles.form}>

                    {/* Name */}
                    <View style={styles.field}>
                        <Text variant="labelLarge" style={styles.label}>
                            Name
                        </Text>
                        <Controller 
                            control={control}
                            name="name"
                            rules={{
                                required: "Name is required",
                                minLength: { value: 2, message: "Name must be at least 2 characters" },
                            }}
                            render={({ field: { value, onChange, onBlur } }) => (
                                <TextInput 
                                    mode="outlined"
                                    value={value}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    placeholder="Your name"
                                    error={!!errors.name}
                                    style={styles.input}
                                    outlineStyle={styles.inputOutline}
                                />
                            )}
                        />
                        {errors.name && (
                            <HelperText type="error">{errors.name.message}</HelperText>
                        )}
                    </View>

                    {/* Email */}
                    <View style={styles.field}>
                        <Text variant="labelLarge" style={styles.label}>
                            Email
                        </Text>
                        <Controller 
                            control={control}
                            name="email"
                            rules={{
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Enter a valid email address'
                                }
                            }}
                            render={({ field: { value, onChange, onBlur } }) => (
                                <TextInput 
                                    mode="outlined"
                                    value={value}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    placeholder="Your email"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    error={!!errors.email}
                                    style={styles.input}
                                    outlineStyle={styles.inputOutline}
                                />
                            )}
                        />
                        {errors.email && (
                            <HelperText type="error">{errors.email.message}</HelperText>
                        )}
                    </View>
                </View>

                {/* Submit */}
                <Button
                    mode="contained"
                    onPress={handleSubmit(onSubmit)}
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    style={styles.button} 
                    labelStyle={styles.buttonLabel}   
                >
                    Save changes
                </Button>
            </ScrollView>
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.background
    },
    content: {
        paddingBottom: 48,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: spacing['2xl'],
    },
    title: {
        color: colors.textPrimary
    },
    headerSpacer: {
        width: 56,
    },
    form: {
        gap: spacing.lg,
        marginBottom: spacing['2xl'],
    },
    field: {
        gap: spacing.xs,
    },
    label: {
        color: colors.textSecondary,
    },
    input: {
        backgroundColor: colors.surface,
    },
    inputOutline: {
        borderRadius: radius.xl,
        borderColor: colors.border,
    },
    button: {
        borderRadius: radius.full,
    },
    buttonLabel: {
        paddingVertical: spacing.xs,
    },
})